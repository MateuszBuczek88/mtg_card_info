import re
import json

def parse_rules(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    keywords = {}
    current_keyword = None
    current_section = None

    # Pattern for keyword headers (e.g., 701.2. Activate)
    header_re = re.compile(r'^(\d{3}\.\d+)\.\s+(.+)$')
    # Pattern for definition lines (e.g., 701.2a To activate...)
    def_re = re.compile(r'^(\d{3}\.\d+)[a-z]\s+(.+)$')

    for i, line in enumerate(lines):
        line = line.strip()
        if not line:
            continue

        header_match = header_re.match(line)
        if header_match:
            section_num, name = header_match.groups()
            if section_num.startswith('701') or section_num.startswith('702'):
                # Exclude intro sections like 701.1 or 702.1
                if not section_num.endswith('.1'):
                    current_keyword = name.strip()
                    current_section = section_num
                    if current_keyword not in keywords:
                        keywords[current_keyword] = []
            continue

        def_match = def_re.match(line)
        if def_match:
            section_num, definition = def_match.groups()
            if current_section and section_num == current_section:
                # Add definition if it's the first paragraph for this section
                # but we might want multiple if they are short or if they are relevant.
                # For MTG card tooltips, usually the 'a' rule is the most descriptive.
                # However, some keywords like 'Fading' have 'N' and two abilities.
                # We'll collect all top-level definitions and join them or pick the best.
                # For now, let's just collect them.
                keywords[current_keyword].append(definition.strip())

    # Finalize definitions: join with newlines or take the first one
    final_data = {}
    for k, v in keywords.items():
        if v:
            # Clean up definitions: remove references like "See rule 601"
            clean_def = v[0] # Taking the first one (rule 'a') as primary
            # Remove "See rule X", "(See rule X)", etc.
            clean_def = re.sub(r'\(?See rule \d+(\.\d+[a-z]?)?,?.*?\)?', '', clean_def).strip()
            # Remove trailing periods if they were inside parentheses that were removed
            clean_def = re.sub(r'\.\s*\.$', '.', clean_def)
            final_data[k] = clean_def

    return final_data

if __name__ == "__main__":
    rules_path = r"c:\Users\mateu\Documents\mtg_card_info\MagicCompRules 20260227.txt"
    data = parse_rules(rules_path)
    print(json.dumps(data, indent=2))

from pathlib import Path

for path in Path("src/components/demos").rglob("*.tsx"):
    text = path.read_text(encoding="utf-8")
    updated = (
        text.replace("<motion.div", "<div")
        .replace("</motion.div>", "</div>")
        .replace("<motion.ul", "<ul")
        .replace("</motion.ul>", "</ul>")
    )
    if updated != text:
        path.write_text(updated, encoding="utf-8")
        print("fixed", path)

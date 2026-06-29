# read_decode.py
with open("README.md", "r", encoding="utf-8") as f:
    raw = f.read()
# 按unicode_escape解码，还原\uXXXX为中文
decoded = raw.encode("utf-8").decode("unicode_escape")
with open("README_fixed.md", "w", encoding="utf-8") as f:
    f.write(decoded)
print("已生成修复后的 README_fixed.md")
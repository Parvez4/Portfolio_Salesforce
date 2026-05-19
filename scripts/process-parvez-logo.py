from collections import deque
from pathlib import Path

from PIL import Image

src = Path(
    r"C:\Users\shaik\.cursor\projects\c-Users-shaik-Desktop-Salesforce-Portfolio\assets\parvez-logo.png"
)
out = Path("public/parvez-logo.png")

img = Image.open(src).convert("RGBA")
w, h = img.size
px = img.load()


def is_background(r: int, g: int, b: int, a: int) -> bool:
    return a > 10 and r > 245 and g > 245 and b > 245


visited = [[False] * w for _ in range(h)]
queue: deque[tuple[int, int]] = deque()

for x in range(w):
    for y in (0, h - 1):
        if not visited[y][x] and is_background(*px[x, y]):
            visited[y][x] = True
            queue.append((x, y))

for y in range(h):
    for x in (0, w - 1):
        if not visited[y][x] and is_background(*px[x, y]):
            visited[y][x] = True
            queue.append((x, y))

while queue:
    x, y = queue.popleft()
    for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
        nx, ny = x + dx, y + dy
        if 0 <= nx < w and 0 <= ny < h and not visited[ny][nx]:
            if is_background(*px[nx, ny]):
                visited[ny][nx] = True
                queue.append((nx, ny))

for y in range(h):
    for x in range(w):
        if visited[y][x]:
            px[x, y] = (255, 255, 255, 0)

img.save(out)
print("saved", out.resolve(), img.size)

from collections import deque
from pathlib import Path

from PIL import Image

src = Path(
    r"C:\Users\shaik\.cursor\projects\c-Users-shaik-Desktop-Salesforce-Portfolio\assets\c__Users_shaik_AppData_Roaming_Cursor_User_workspaceStorage_25773fca2f7ea099670f87c87233e929_images_Salesforce_Logo-878ac0c3-c99a-408c-9ef8-633b6cb80b02.png"
)
out = Path("public/salesforce-logo.png")

img = Image.open(src).convert("RGBA")
w, h = img.size
px = img.load()


def is_background(r: int, g: int, b: int, a: int) -> bool:
    return a > 10 and r > 248 and g > 248 and b > 248


def is_cloud_blue(r: int, g: int, b: int) -> bool:
    return b > 90 and b > r + 12 and b > g + 5


def is_logo_white(r: int, g: int, b: int) -> bool:
    return r > 175 and g > 175 and b > 175 and not is_cloud_blue(r, g, b)


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
        r, g, b, a = px[x, y]
        if visited[y][x]:
            px[x, y] = (r, g, b, 0)
        elif is_logo_white(r, g, b):
            px[x, y] = (255, 255, 255, 255)

img.save(out)
print("saved", out.resolve())

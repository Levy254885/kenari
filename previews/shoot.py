from playwright.sync_api import sync_playwright
import os
d=os.path.dirname(os.path.abspath(__file__))
with sync_playwright() as p:
    b=p.chromium.launch()
    for name,w,h,pg in [("desktop-home",1440,900,"home"),("mobile-home",390,844,"home"),("desktop-packages",1440,900,"packages"),("mobile-packages",390,844,"packages")]:
        pgx=b.new_page(viewport={"width":w,"height":h});pgx.goto(f"file://{d}/{pg}.html");pgx.wait_for_timeout(500)
        pgx.screenshot(path=f"{d}/{name}.png",full_page=True);pgx.close()
    b.close()

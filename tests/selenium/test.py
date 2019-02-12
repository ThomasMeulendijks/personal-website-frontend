from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver import Firefox
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By

import os
cwd = os.getcwd();

driver = Firefox()
# Time out in seconds
wait = WebDriverWait(driver, timeout=1)

driver.get('http://localhost:8080')
try:
    wait.until(EC.presence_of_element_located(
        (By.CLASS_NAME, "item")))
    element = wait.until(EC.element_to_be_clickable((By.LINK_TEXT,'Item1')))
    element.click()
finally:
    print('quitting..')
    driver.quit()


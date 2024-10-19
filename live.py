import os
# Code of Life
def code_of_life(value : str, blessings : int, time: list) -> list:
    time.append(value)
    print(f"{blessings} {time}")
    return time

def start_living(alive: bool, blessings : int, time: list) -> None:
    haters = "new_haters.txt"
    your_path = os.path
    while(alive):
        blessings += 1
        try:
            code_of_life("Keep adding more value...", blessings, time)
            if(your_path.exists(haters)):
                print("We see you 👁️ 👁️")
                continue
            else:
                with open("new_haters.txt", "w") as haters:
                    # Make haters mad
                    haters.write("Witness the greatness!!!")
                    
        except Exception as death:
            your_path = os.getcwd() + " end"
            print("Reached the inevertible! ", death)
            alive = False

if(__name__ == "__main__"):
    start_living(True, 0, [])
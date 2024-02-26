class User:
    id = 89
    name = "no name"
    password = 1789

    def __init__(self, new_name=None):
        self.is_new = True
        if new_name is not None:
            self.name = new_name
            
usr=User("John")

print(usr.name)
print(usr.id)
print(usr.password)
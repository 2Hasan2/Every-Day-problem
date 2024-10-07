#!/bin/python3
def gradingStudents(grades):
    return [g + 5 - g % 5 if g >= 38 and g % 5 >= 3 else g for g in grades]


print(gradingStudents([73, 67, 38, 33]))

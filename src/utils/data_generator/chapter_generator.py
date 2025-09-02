import random
import json

# id 0 -> 16
course_ids = list(range(1, 17))

def generate_chapters(course_id):
    middle_chapters = [
        ("Skills in Action", "Hands-on activities to apply what you've learned so far in creative and practical ways."),
        ("Deep Dive", "Explore a specific theme or idea in depth, with examples and fun facts."),
        ("Challenge Mode", "Tackle challenges, mini-games, or missions designed to test your knowledge."),
        ("Behind the Scenes", "Uncover background stories, fun trivia, and the making-of elements related to the course."),
        ("Character Spotlight", "Learn more about a character featured in the course and their unique perspective.")
    ]
    selected = random.sample(middle_chapters, 2)

    return [
        {
            "title": "Introduction",
            "content": "Welcome to the course! This chapter sets the stage for your adventure, explaining what you'll learn and how to get the most out of it.",
            "course_id": course_id
        },
        {
            "title": selected[0][0],
            "content": selected[0][1],
            "course_id": course_id
        },
        {
            "title": selected[1][0],
            "content": selected[1][1],
            "course_id": course_id
        },
        {
            "title": "Conclusion",
            "content": "Time to wrap up! Let's review what you've learned, reflect on your progress, and celebrate your achievements in the course.",
            "course_id": course_id
        }
    ]

chapter_data = []
for course_id in course_ids:
    chapter_data.extend(generate_chapters(course_id))

print(json.dumps(chapter_data, indent=2))

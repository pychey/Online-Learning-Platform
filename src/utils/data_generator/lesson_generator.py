import random
import re
import json

CHAPTER_DATA = [
  { 
    "id": 1, 
    "title": "Introduction", 
    "slug": "introduction", 
    "content": "Welcome to the course! This chapter sets the stage for your adventure, explaining what you'll learn and how to get the most out of it.", 
    "course_id": 1 
  },
  { 
    "id": 2, 
    "title": "Character Spotlight", 
    "slug": "character-spotlight", 
    "content": "Learn more about a character featured in the course and their unique perspective.", 
    "course_id": 1 
  },
  { 
    "id": 3, 
    "title": "Deep Dive", 
    "slug": "deep-dive", 
    "content": "Explore a specific theme or idea in depth, with examples and fun facts.", 
    "course_id": 1 
  },
  { 
    "id": 4, 
    "title": "Conclusion", 
    "slug": "conclusion", 
    "content": "Time to wrap up! Let's review what you've learned, reflect on your progress, and celebrate your achievements in the course.", 
    "course_id": 1 
  },
  { 
    "id": 5, 
    "title": "Introduction", 
    "slug": "introduction", 
    "content": "Welcome to the course! This chapter sets the stage for your adventure, explaining what you'll learn and how to get the most out of it.", 
    "course_id": 2 
  },
  { 
    "id": 6, 
    "title": "Challenge Mode", 
    "slug": "challenge-mode", 
    "content": "Tackle challenges, mini-games, or missions designed to test your knowledge.", 
    "course_id": 2 
  },
  { 
    "id": 7, 
    "title": "Skills in Action", 
    "slug": "skills-in-action", 
    "content": "Hands-on activities to apply what you've learned so far in creative and practical ways.", 
    "course_id": 2 
  },
  { 
    "id": 8, 
    "title": "Conclusion", 
    "slug": "conclusion", 
    "content": "Time to wrap up! Let's review what you've learned, reflect on your progress, and celebrate your achievements in the course.", 
    "course_id": 2 
  },
  { 
    "id": 9, 
    "title": "Introduction", 
    "slug": "introduction", 
    "content": "Welcome to the course! This chapter sets the stage for your adventure, explaining what you'll learn and how to get the most out of it.", 
    "course_id": 3 
  },
  { 
    "id": 10, 
    "title": "Character Spotlight", 
    "slug": "character-spotlight", 
    "content": "Learn more about a character featured in the course and their unique perspective.", 
    "course_id": 3 
  },
  { 
    "id": 11, 
    "title": "Deep Dive", 
    "slug": "deep-dive", 
    "content": "Explore a specific theme or idea in depth, with examples and fun facts.", 
    "course_id": 3 
  },
  { 
    "id": 12, 
    "title": "Conclusion", 
    "slug": "conclusion", 
    "content": "Time to wrap up! Let's review what you've learned, reflect on your progress, and celebrate your achievements in the course.", 
    "course_id": 3 
  },
  { 
    "id": 13, 
    "title": "Introduction", 
    "slug": "introduction", 
    "content": "Welcome to the course! This chapter sets the stage for your adventure, explaining what you'll learn and how to get the most out of it.", 
    "course_id": 4 
  },
  { 
    "id": 14, 
    "title": "Challenge Mode", 
    "slug": "challenge-mode", 
    "content": "Tackle challenges, mini-games, or missions designed to test your knowledge.", 
    "course_id": 4 
  },
  { 
    "id": 15, 
    "title": "Deep Dive", 
    "slug": "deep-dive", 
    "content": "Explore a specific theme or idea in depth, with examples and fun facts.", 
    "course_id": 4 
  },
  { 
    "id": 16, 
    "title": "Conclusion", 
    "slug": "conclusion", 
    "content": "Time to wrap up! Let's review what you've learned, reflect on your progress, and celebrate your achievements in the course.", 
    "course_id": 4 
  },
  { 
    "id": 17, 
    "title": "Introduction", 
    "slug": "introduction", 
    "content": "Welcome to the course! This chapter sets the stage for your adventure, explaining what you'll learn and how to get the most out of it.", 
    "course_id": 5 
  },
  { 
    "id": 18, 
    "title": "Deep Dive", 
    "slug": "deep-dive", 
    "content": "Explore a specific theme or idea in depth, with examples and fun facts.", 
    "course_id": 5 
  },
  { 
    "id": 19, 
    "title": "Challenge Mode", 
    "slug": "challenge-mode", 
    "content": "Tackle challenges, mini-games, or missions designed to test your knowledge.", 
    "course_id": 5 
  },
  { 
    "id": 20, 
    "title": "Conclusion", 
    "slug": "conclusion", 
    "content": "Time to wrap up! Let's review what you've learned, reflect on your progress, and celebrate your achievements in the course.", 
    "course_id": 5 
  },
  { 
    "id": 21, 
    "title": "Introduction", 
    "slug": "introduction", 
    "content": "Welcome to the course! This chapter sets the stage for your adventure, explaining what you'll learn and how to get the most out of it.", 
    "course_id": 6 
  },
  { 
    "id": 22, 
    "title": "Skills in Action", 
    "slug": "skills-in-action", 
    "content": "Hands-on activities to apply what you've learned so far in creative and practical ways.", 
    "course_id": 6 
  },
  { 
    "id": 23, 
    "title": "Deep Dive", 
    "slug": "deep-dive", 
    "content": "Explore a specific theme or idea in depth, with examples and fun facts.", 
    "course_id": 6 
  },
  { 
    "id": 24, 
    "title": "Conclusion", 
    "slug": "conclusion", 
    "content": "Time to wrap up! Let's review what you've learned, reflect on your progress, and celebrate your achievements in the course.", 
    "course_id": 6 
  },
  { 
    "id": 25, 
    "title": "Introduction", 
    "slug": "introduction", 
    "content": "Welcome to the course! This chapter sets the stage for your adventure, explaining what you'll learn and how to get the most out of it.", 
    "course_id": 7 
  },
  { 
    "id": 26, 
    "title": "Behind the Scenes", 
    "slug": "behind-the-scenes", 
    "content": "Uncover background stories, fun trivia, and the making-of elements related to the course.", 
    "course_id": 7 
  },
  { 
    "id": 27, 
    "title": "Challenge Mode", 
    "slug": "challenge-mode", 
    "content": "Tackle challenges, mini-games, or missions designed to test your knowledge.", 
    "course_id": 7 
  },
  { 
    "id": 28, 
    "title": "Conclusion", 
    "slug": "conclusion", 
    "content": "Time to wrap up! Let's review what you've learned, reflect on your progress, and celebrate your achievements in the course.", 
    "course_id": 7 
  },
  { 
    "id": 29, 
    "title": "Introduction", 
    "slug": "introduction", 
    "content": "Welcome to the course! This chapter sets the stage for your adventure, explaining what you'll learn and how to get the most out of it.", 
    "course_id": 8 
  },
  { 
    "id": 30, 
    "title": "Character Spotlight", 
    "slug": "character-spotlight", 
    "content": "Learn more about a character featured in the course and their unique perspective.", 
    "course_id": 8 
  },
  { 
    "id": 31, 
    "title": "Behind the Scenes", 
    "slug": "behind-the-scenes", 
    "content": "Uncover background stories, fun trivia, and the making-of elements related to the course.", 
    "course_id": 8 
  },
  { 
    "id": 32, 
    "title": "Conclusion", 
    "slug": "conclusion", 
    "content": "Time to wrap up! Let's review what you've learned, reflect on your progress, and celebrate your achievements in the course.", 
    "course_id": 8 
  },
  { 
    "id": 33, 
    "title": "Introduction", 
    "slug": "introduction", 
    "content": "Welcome to the course! This chapter sets the stage for your adventure, explaining what you'll learn and how to get the most out of it.", 
    "course_id": 9 
  },
  { 
    "id": 34, 
    "title": "Character Spotlight", 
    "slug": "character-spotlight", 
    "content": "Learn more about a character featured in the course and their unique perspective.", 
    "course_id": 9 
  },
  { 
    "id": 35, 
    "title": "Deep Dive", 
    "slug": "deep-dive", 
    "content": "Explore a specific theme or idea in depth, with examples and fun facts.", 
    "course_id": 9 
  },
  { 
    "id": 36, 
    "title": "Conclusion", 
    "slug": "conclusion", 
    "content": "Time to wrap up! Let's review what you've learned, reflect on your progress, and celebrate your achievements in the course.", 
    "course_id": 9 
  },
  { 
    "id": 37, 
    "title": "Introduction", 
    "slug": "introduction", 
    "content": "Welcome to the course! This chapter sets the stage for your adventure, explaining what you'll learn and how to get the most out of it.", 
    "course_id": 10 
  },
  { 
    "id": 38, 
    "title": "Challenge Mode", 
    "slug": "challenge-mode", 
    "content": "Tackle challenges, mini-games, or missions designed to test your knowledge.", 
    "course_id": 10 
  },
  { 
    "id": 39, 
    "title": "Skills in Action", 
    "slug": "skills-in-action", 
    "content": "Hands-on activities to apply what you've learned so far in creative and practical ways.", 
    "course_id": 10 
  },
  { 
    "id": 40, 
    "title": "Conclusion", 
    "slug": "conclusion", 
    "content": "Time to wrap up! Let's review what you've learned, reflect on your progress, and celebrate your achievements in the course.", 
    "course_id": 10 
  },
  { 
    "id": 41, 
    "title": "Introduction", 
    "slug": "introduction", 
    "content": "Welcome to the course! This chapter sets the stage for your adventure, explaining what you'll learn and how to get the most out of it.", 
    "course_id": 11 
  },
  { 
    "id": 42, 
    "title": "Challenge Mode", 
    "slug": "challenge-mode", 
    "content": "Tackle challenges, mini-games, or missions designed to test your knowledge.", 
    "course_id": 11 
  },
  { 
    "id": 43, 
    "title": "Skills in Action", 
    "slug": "skills-in-action", 
    "content": "Hands-on activities to apply what you've learned so far in creative and practical ways.", 
    "course_id": 11 
  },
  { 
    "id": 44, 
    "title": "Conclusion", 
    "slug": "conclusion", 
    "content": "Time to wrap up! Let's review what you've learned, reflect on your progress, and celebrate your achievements in the course.", 
    "course_id": 11 
  }
];


def slugify(text):
    return re.sub(r'[^a-z0-9]+', '-', text.lower()).strip('-')

lesson_title_pool = [
    "Creative Expression", "Real-World Connections", "Test Your Skills",
    "Exploring the Big Idea", "Level Up", "Examples in Action",
    "Build Something Cool", "Fun Facts and Trivia", "Behind the Curtain",
    "Hero's Background", "Meet Your Guide", "Strengths and Weaknesses",
    "Challenge Time", "What Would You Do?", "Story Breakdown"
]

lesson_data = []
lesson_id_counter = 1

for chapter in CHAPTER_DATA:
    chapter_id = chapter["id"]
    chapter_title = chapter["title"]

    if chapter_title == "Conclusion":
        num_lessons = 0
    elif chapter_title == "Introduction":
        num_lessons = 0
    else:
        num_lessons = random.randint(3, 6)

    for i in range(num_lessons):
        lesson_topic = random.choice(lesson_title_pool)
        lesson_title = f"Lesson {i + 1}: {lesson_topic}"
        lesson_slug = slugify(lesson_title)

        lesson_data.append({
            "id": lesson_id_counter,
            "title": lesson_title,
            "slug": lesson_slug,
            "content": f"This lesson focuses on {lesson_topic} and helps deepen your understanding through engaging activities and discussions.",
            "chapter_id": chapter_id
        })

        lesson_id_counter += 1

with open("lesson_data.json", "w") as f:
    json.dump(lesson_data, f, indent=2)

print(f"Generated {len(lesson_data)} lessons across {len(CHAPTER_DATA)} chapters.")

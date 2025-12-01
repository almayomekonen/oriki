import { useState } from "react";
import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import GoalsList from "./components/GoalsList";

type CourseGoal = {
  description: string;
  title: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal() {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        title: "Letsssss Goooooo 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥",
        description: "Ts is the besttttt 🔥🔥🔥🔥🔥🔥🔥",
        id: Math.random(),
      };

      return [...prevGoals, newGoal];
    });
  }

  return (
    <main>
      <Header image={{ src: "/my-goals.jpg", alt: "goals" }}>
        <h1>Learning React + Type Script</h1>
      </Header>

      <button onClick={handleAddGoal}>Add New Goal 💥🦾</button>
      <GoalsList goals={goals} />
    </main>
  );
}

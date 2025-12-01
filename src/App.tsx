import { useState } from "react";
import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import GoalsList from "./components/GoalsList";
import Form from "./components/Form";

type CourseGoal = {
  description: string;
  title: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        title: goal,
        description: summary,
        id: Math.random(),
      };

      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      <Header image={{ src: "/my-goals.jpg", alt: "goals" }}>
        <h1>Learning React + Type Script</h1>
      </Header>

      <button onClick={handleAddGoal}>Add New Goal 💥🦾</button>
      <GoalsList onDeleteGoal={handleDeleteGoal} goals={goals} />
      <Form onAddGoal={handleAddGoal} />
    </main>
  );
}

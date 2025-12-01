import CourseGoal from "./CourseGoal";

type GoalsListProps = {
  goals: {
    description: string;
    title: string;
    id: number;
  }[];

  onDeleteGoal: (id: number) => void;
};

export default function GoalsList({ goals, onDeleteGoal }: GoalsListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} onDelete={onDeleteGoal} title={goal.title}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}

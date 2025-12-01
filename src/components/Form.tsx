import { useRef } from "react";

type FormProps = {
  onAddGoal: (goal: string, summary: string) => void;
};

export default function Form({ onAddGoal }: FormProps) {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;

    onAddGoal(enteredGoal, enteredSummary);
  }

  return (
    <form onClick={handleSubmit}>
      <p>
        <label htmlFor="">Your Goal</label>
        <input type="text" ref={goal} />
      </p>
      <p>
        <label htmlFor="">Short Summary</label>
        <input type="text" ref={summary} />
      </p>

      <p>
        <button>Add The Damn Goal</button>
      </p>
    </form>
  );
}

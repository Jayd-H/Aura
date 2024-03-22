import Button from "../Button";

export default function HomePage() {
  return (
    <div className="min-h-screen flex">
      <div className="m-auto">
        <Button text="Get Started" navigateTo="/register" />
      </div>
    </div>
  );
}

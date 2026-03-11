// this page should be used only as a splash page to decide where a user should be navigated to
// when logged in --> to /heists
// when not logged in --> to /login

import { Clock8 } from "lucide-react";

export default function Home() {
  return (
    <div className="center-content">
      <div className="page-content">
        <h1>
          P<Clock8 className="logo" strokeWidth={2.75} />
          cket Heist
        </h1>
        <div>Chaos, delivered.</div>
        <p>
          Welcome to Pocket Heist — the app where you assign sneaky little
          missions to your coworkers. Steal someone&apos;s stapler. Rearrange
          the mugs. Leave a cryptic note on the whiteboard. The office will
          never be the same.
        </p>
      </div>
    </div>
  );
}

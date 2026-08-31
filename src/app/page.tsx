import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
     This is App One. You can access App Two by clicking the link below.
     <Link href="/app-two">Go to App Two</Link>
      </main>
    </div>
  );
}

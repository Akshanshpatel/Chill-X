import Image from "next/image";
import styles from "./page.module.css";
// import Hero from 'public/hero.png';
// import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Personal Website for Chilling.
        </h1>
        <p className={styles.desc}>
          --I write blogs here daily and implemented authentication using Clerk<br/>
          --Also implemented chatgpt, darkmode toggle and many more features.
        </p>
        {/* <Button url="/portfolio" text="See Our Works"/> */}
      </div>
      <div className={styles.item}>
        <Image src="/hero4.png" alt="Hero Image" width={500} height={300} className={styles.img}/>
      </div>
    </div>
  );
}
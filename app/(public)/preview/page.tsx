// preview page for newly created UI components
import Skeleton from "@/components/Skeleton"
import Avatar from "@/components/Avatar"
import styles from "./preview.module.css"

export default function PreviewPage() {
  return (
    <div className="page-content">
      <h2>Preview</h2>

      <h3>Avatar</h3>
      <div className={styles.row}>
        <Avatar name="Alice" />
        <Avatar name="JohnDoe" />
        <Avatar name="MaryJane" />
        <Avatar name="bob" />
      </div>

      <h3>Skeleton</h3>
      <div className={styles.grid}>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    </div>
  )
}

"use client";

import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { MicroButtonUI } from "@/components/ui/MicroButtonUI/MicroButtonUI";

export default function CallsPage() {
  const [forceRender, setForceRender] = useState(true);
  const [calls, setCalls] = useState<{ time: number }[] | null>(null);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setForceRender(!forceRender);
      console.log(forceRender);
    }, 1000);

    return () => clearTimeout(timeoutID);
  }, [forceRender]);

  const addCall = () => {
    if (!calls) {
      return [
        {
          time: Date.now(),
        },
      ];
    }

    return [
      ...calls,
      {
        time: Date.now(),
      },
    ];
  };

  const deleteItem = (i: number) => {
    if (!calls) {
      return;
    }

    setCalls(() => calls.filter((callInner, indexInner) => i !== indexInner));
  };

  return (
    <div>
      <div className={styles.callsBlock}>
        <div className={styles.callsHeader}>
          <span className={styles.callsTitle}>Calls</span>
          <MicroButtonUI
            className={styles.createCallButton}
            onClick={() => setCalls(addCall())}
          >
            Create call
          </MicroButtonUI>
        </div>
        <div className={styles.callsZone}>
          {calls
            ? calls.map((call, i) => (
                <button
                  onClick={() => deleteItem(i)}
                  key={i}
                  className={styles.callItem}
                >
                  {((Date.now() - call.time) / 1000).toFixed(0)}
                </button>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}

import { database } from "@/database";
import { migrate } from "@/database/migration";
import { localstorage } from "@/services/localstorage";

import { Redirect } from "expo-router";
import { useEffect, useState } from "react";

export default function Index() {
  const [firstTime, setFirstTime] = useState(false);

  const runDataMigrations = async () => {
    await migrate(database);
  };

  useEffect(() => {
    if (localstorage.getString("trimathic:isFirstTimeOpen") === undefined) {
      setFirstTime(true);
      runDataMigrations();
      localstorage.set("trimathic:isFirstTimeOpen", "false");
    }
  }, [firstTime]);

  if (firstTime) {
    return <Redirect href={"/(auth)/welcome"} />;
  } else {
    return <Redirect href={"/learn"} />;
  }
}

"use client"; // if using Next.js 13+ with App Router

import { useEffect } from "react";

const AcuityScheduler = () => {
  useEffect(() => {
    // Dynamically load the Acuity Scheduling script
    const script = document.createElement("script");
    script.src = "https://embed.acuityscheduling.com/js/embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup script on component unmount
    };
  }, []);

  return (
    <div>
      <iframe
        src="https://app.acuityscheduling.com/schedule.php?owner=34323945&ref=embedded_csp"
        title="Schedule Appointment"
        width="100%"
        height="800"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default AcuityScheduler;

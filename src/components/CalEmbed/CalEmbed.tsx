import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";

export default function CalEmbed() {
  const [cal, setCal] = useState<
    Awaited<ReturnType<typeof getCalApi>> | undefined
  >(undefined);

  useEffect(() => {
    (async () => {
      const cal = await getCalApi();
      setCal(() => cal);
    })();
  }, []);

  useEffect(() => {
    if (cal) {
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: true,
        layout: "month_view",
        cssVarsPerTheme: {
          light: {},
          dark: {
            "cal-bg-muted": "#1a1f28",
            "cal-bg-emphasis": "#13171f",
            "cal-bg": "#181c25",
            "cal-bg-subtle": "#13171f",
            "cal-border": "#2a3140",
            "cal-border-subtle": "#202632",
            "cal-border-emphasis": "#434a56",
          },
        },
      });

      // Ugly hack to fix scrollbar always showing
      cal.instance?.actionManager.on("__dimensionChanged", (e) => {
        if (!cal.instance || !cal.instance.iframe) return;

        const { data } = e.detail;
        const iframe = cal.instance.iframe;

        const unit = "px";
        if (data.iframeHeight) {
          iframe.style.height = data.iframeHeight + 20 + unit;
        }
      });
    }
  }, [cal]);

  return (
    <Cal
      calLink="kevenlefebvre/15min"
      style={{ width: "100%", height: "100%", overflow: "visible" }}
      config={{ layout: "month_view" }}
    />
  );
}

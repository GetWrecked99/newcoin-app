"use client";

// ignore the errors, its just some type script warning that wouldn't make any problem into your application.

import React, { FC, useEffect, useRef } from "react";

const TradingViewWidget: FC = (): JSX.Element => {
  let tvScriptLoadingPromise: any;
  const onLoadScriptRef = useRef();

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/tv.js";
        script.type = "text/javascript";
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    );

    function createWidget() {
      if (
        document.getElementById("technical-analysis-chart-demo") &&
        "TradingView" in window
      ) {
        new window.TradingView.widget({
          container_id: "technical-analysis-chart-demo",
          width: "100%",
          height: "100%",
          autosize: true,
          symbol: "BTCUSDT",
          interval: "30",
          timezone: "exchange",
          theme: "light",
          style: "1",
          toolbar_bg: "#f1f3f6",
          withdateranges: true,
          hide_side_toolbar: false,
          allow_symbol_change: true,
          studies: ["MASimple@tv-basicstudies"],
          locale: "fa_IR",
        });
      }
    }
    return () => (onLoadScriptRef.current = null);
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div id="technical-analysis-chart-demo" />
    </div>
  );
};

export { TradingViewWidget };

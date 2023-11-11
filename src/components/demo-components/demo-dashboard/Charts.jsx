import React from "react";
import {
  CandleSeries,
  Crosshair,
  DateTime,
  Inject,
  LineSeries,
  StockChartComponent,
  StockChartSeriesCollectionDirective,
  StockChartSeriesDirective,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import {
  EmaIndicator,
  RsiIndicator,
  BollingerBands,
  TmaIndicator,
  MomentumIndicator,
  SmaIndicator,
  AtrIndicator,
  AccumulationDistributionIndicator,
  MacdIndicator,
  StochasticIndicator,
  Export,
} from "@syncfusion/ej2-react-charts";
import { chartData } from "./data";
import Cards from "./Cards";
const Charts = () => {
  return (
    <Cards>
      <StockChartComponent
        crosshair={{ enable: true, lineType: "Both" }}
        primaryXAxis={{
          crosshairTooltip: { enable: true },
        }}
        enableSelector={false}
        periods={[
          { selected: true, interval: "Hours", interval: 12, text: "12H" },
        ]}
        //  enablePeriodSelector={false}
      >
        <StockChartSeriesCollectionDirective>
          <StockChartSeriesDirective
            type="Candle"
            dataSource={chartData}
            xName="x"
          />
        </StockChartSeriesCollectionDirective>
        <Inject
          services={[
            DateTime,
            Tooltip,
            Crosshair,
            CandleSeries,
            LineSeries,
            EmaIndicator,
            RsiIndicator,
            BollingerBands,
            TmaIndicator,
            MomentumIndicator,
            SmaIndicator,
            AtrIndicator,
            Export,
            AccumulationDistributionIndicator,
            MacdIndicator,
            StochasticIndicator,
          ]}
        />
      </StockChartComponent>
    </Cards>
  );
};

export default Charts;

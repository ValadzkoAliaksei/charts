// @ts-ignore
import React from "react";
import { Line, Column } from "@ant-design/charts";
import GoogleLogin from "react-google-login";

const Page: React.FC = () => {
  const data = [
    { year: "1991", value: 3 },
    { year: "1992", value: 4 },
    { year: "1993", value: 3.5 },
    { year: "1994", value: 5 },
    { year: "1995", value: 4.9 },
    { year: "1996", value: 6 },
    { year: "1997", value: 7 },
    { year: "1998", value: 9 },
    { year: "1999", value: 13 },
  ];

  const configLine = {
    data,
    yField: "value",
    xField: "year",
    tooltip: {
      customContent: (title: any, items: any) => {
        return (
          <>
            <h5 style={{ marginTop: 16 }}>{title}</h5>
            <ul style={{ paddingLeft: 0 }}>
              {items?.map(
                (
                  item: { year?: any; name?: any; value?: any; color?: any },
                  index: any
                ) => {
                  const { name, value, color } = item;
                  return (
                    <li
                      key={item.year}
                      className="g2-tooltip-list-item"
                      data-index={index}
                      style={{
                        marginBottom: 4,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      Ghbsdf
                      <span
                        className="g2-tooltip-marker"
                        style={{ backgroundColor: color }}
                      ></span>
                      <span
                        style={{
                          display: "inline-flex",
                          flex: 1,
                          justifyContent: "space-between",
                        }}
                      >
                        <span style={{ marginRight: 16 }}>{name}:</span>
                        <span className="g2-tooltip-list-item-value">
                          {value}
                        </span>
                      </span>
                    </li>
                  );
                }
              )}
            </ul>
          </>
        );
      },
    },
    point: {
      size: 5,
      shape: "diamond",
      style: {
        fill: "white",
        stroke: "#2593fc",
        lineWidth: 2,
      },
    },
    // slider: {
    //   start: 0.1,
    //   end: 1,
    // },
  } as any;

  const dataC = [
    {
      type: "Furniture appliances",
      sales: 38,
    },
    {
      type: "Cereals, Oils and Non-staple food",
      sales: 52,
    },
    {
      type: "Fresh fruits",
      sales: 0,
    },
    {
      type: "Beauty care",
      sales: 145,
    },
    {
      type: "Baby products",
      sales: 48,
    },
    {
      type: "Imported food",
      sales: 38,
    },
    {
      type: "Food and drink",
      sales: 38,
    },
    {
      type: "Home cleaning",
      sales: 38,
    },
  ];

  const config = {
    data: dataC,
    xField: "type",
    yField: "sales",
    label: {
      position: "middle",
      style: {
        fill: "#FF0000",
        opacity: 1,
      },
    },
    meta: {
      type: { alias: "Category" },
      sales: { alias: "Sales" },
    },
  } as any;

  const responseGoogle = (response: any) => {
    console.log(response);
  };

  return (
    <div>
      <GoogleLogin
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        render={(renderProps) => (
          <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
            This is my custom Google button
          </button>
        )}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
      <Line {...configLine} />
      <Column
        {...config}
        onReady={(plot) => {
          plot.on("plot:click", (evt: any) => {
            const { x, y } = evt;
            const { xField } = plot.options;
            const tooltipData = plot.chart.getTooltipItems({ x, y });
            console.log(tooltipData);
          });
        }}
      />
    </div>
  ) as any;
};
export default Page;

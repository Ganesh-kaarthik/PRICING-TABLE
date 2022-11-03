import { PriceCard } from "./Pricecards";

export default function APP(){
  const plans = [
    {
      type : "FREE",
      price :  "0",
      details:{
        noOfusers: "✔  Single User",
        storage:   "✔ 5GB Storage",
        noOfpubproje: "✔ Unlimited Public Projects",
        access:  "✔  Community Access",
        noOfpriproje: "❌  Unlimited Private Projects",
        phone: "❌ Dedicated Phone Support",
        subDomain: "❌  Free Subdomain",
        report: "❌  Monthly Status Reports",
      }
    },
    {
      type : "PLUS",
      price :  "9",
      details:{
        noOfusers: "✔  5 Users",
        storage:   "✔ 50GB Storage",
        noOfpubproje: "✔ Unlimited Public Projects",
        access:  "✔  Community Access",
        noOfpriproje: "✔  Unlimited Private Projects",
        phone: "✔ Dedicated Phone Support",
        subDomain: "✔  Free Subdomain",
        report: "❌  Monthly Status Reports",
    }
  },
    {
      type : "PRO",
      price :  "49",
      details:{
        noOfusers: "✔  Unlimited Users",
        storage:   "✔ 150GB Storage",
        noOfpubproje: "✔ Unlimited Public Projects",
        access:  "✔  Community Access",
        noOfpriproje: "✔  Unlimited Private Projects",
        phone: "✔ Dedicated Phone Support",
        subDomain: "✔  Free Subdomain",
        report: "✔  Monthly Status Reports",
    }
  }
  ];

  return(
    <div className="App">
      <PriceCard plans = {plans} />
    </div>
  );
}


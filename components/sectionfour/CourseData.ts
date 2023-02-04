type quarter = {
    quarterNum:number,
    quart:string
}

type DataType = {
    heading:string,
    colorbg:string,
    quarters:quarter[],
    route:string
}

export const Data:DataType[] = [
  {
    heading: "Web 3.0 (Blockchain) and Metaverse Specialization",
    colorbg: "linear(280deg, #DF57B1,#7E3CB1)",
    quarters: [
      {quarterNum:4,quart:"W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps"},
      {quarterNum:5,quart:"MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences"}
    ],
    route:'/web3'
  },
  {
    heading: "Artificial Intelligence (AI) and Deep Learning Specialization",
    colorbg: "linear(280deg, #E26A26,#D62A9B)",
    quarters: [
        {quarterNum:4,quart:"AI-351: Developing Planet-Scale Intelligent APIs and Python Programming"},
        {quarterNum:5,quart:"AI-361: Deep Learning and MLOps"}
      ],
    route:'/deeplearning'
  },
  {
    heading: "Cloud-Native Computing Specialization",
    colorbg: "linear(280deg, #00C7A3,#7542E0)",
    quarters: [
        {quarterNum:4,quart:"CN-351: Certified Kubernetes Application Developer (CKAD)"},
        {quarterNum:5,quart:"CN-361: Developing Multi-Cloud APIs using CDK for Terraform"}
      ],
    route:'/cloud'
  },
  {
    heading: "Ambient Computing and IoT Specialization",
    colorbg: "linear(280deg, #00BA34,#00ACB7)",
    quarters: [
        {quarterNum:4,quart:"AC-351: Ambient Computing with Voice Assistants and Matter Devices"},
        {quarterNum:5,quart:"AC-361: Embedded Programming using C and Rust"}
      ],
    route:'/ambient'
  },
  {
    heading: "Genomics and Bioinformatics Specialization",
    colorbg: "linear(280deg, #BCCF48,#29CEA7)",
    quarters: [
        {quarterNum:4,quart:"Bio-351: Python for Biologists"},
        {quarterNum:5,quart:"Bio-361: Bioinformatics with Python"}
      ],
    route:'/genomics'
  },
  {
    heading: "Network Programmability and Automation Specialization",
    colorbg: "linear(280deg, #D6B151,#D3807B)",
    quarters: [
        {quarterNum:4,quart:"NPA-351: CCNA 200-301 Certification"},
        {quarterNum:5,quart:"NPA-361: Network Programmability and Automation"}
      ],
    route:'/automation'
  },
];

export const stats = [
  { label: "Monthly Return", value: "+12.4%" },
  { label: "Sharpe Ratio", value: "2.3" },
  { label: "Win Rate", value: "68%" },
] as const;

export const strategies = [
  {
    title: "Derivatives Trading",
    description:
      "Advanced derivatives trading strategies with real-time monitoring and risk management.",
    status: "Active" as const,
  },
  {
    title: "Long-Short Strategy",
    description:
      "Upcoming long-short equity strategies designed for market-neutral returns.",
    status: "Coming Soon" as const,
  },
  {
    title: "Backtesting Engine",
    description:
      "Comprehensive backtesting platform for strategy validation and optimization.",
    status: "Active" as const,
  },
  {
    title: "Drawdown Monitor",
    description:
      "Real-time drawdown monitoring system for portfolio risk management.",
    status: "Active" as const,
  },
] as const;

export const performanceData = [
  { day: "Day 1", return: 0.2 },
  { day: "Day 3", return: 0.8 },
  { day: "Day 5", return: 1.1 },
  { day: "Day 7", return: 0.9 },
  { day: "Day 9", return: 1.6 },
  { day: "Day 11", return: 2.2 },
  { day: "Day 13", return: 2.8 },
  { day: "Day 15", return: 3.1 },
  { day: "Day 17", return: 3.6 },
  { day: "Day 19", return: 4.2 },
  { day: "Day 21", return: 4.8 },
  { day: "Day 23", return: 5.5 },
  { day: "Day 25", return: 6.1 },
  { day: "Day 27", return: 6.8 },
  { day: "Day 30", return: 7.4 },
] as const;

export const keyMetrics = [
  { label: "Max Drawdown", value: "-3.2%" },
  { label: "Avg Daily Return", value: "+0.41%" },
  { label: "Volatility", value: "8.7%" },
  { label: "Profit Factor", value: "1.84" },
] as const;

export const team = [
  {
    name: "Abhishek Jyoti",
    role: "Founder & Quant Research",
    bio: "Leading quantitative research and strategic direction",
    initials: "AJ",
  },
  {
    name: "K Abhishek Kumar",
    role: "Quant Dev",
    bio: "Developing and implementing trading algorithms",
    initials: "AK",
  },
  {
    name: "Sreekrishna Ponnapathi",
    role: "IIT Guwahati Professor",
    bio: "Academic advisor and quantitative strategy consultant",
    initials: "SP",
  },
  {
    name: "Rishita Tiwari",
    role: "Market Analyst",
    bio: "Analyzing market trends and research insights",
    initials: "RT",
  },
] as const;

export const contactInfo = {
  email: "contact@papertownrc.com",
  phone: "+91 XXXXX XXXXX",
  location: "India",
} as const;

export const navLinks = [
  { label: "Strategies", href: "#strategies" },
  { label: "Performance", href: "#performance" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
] as const;

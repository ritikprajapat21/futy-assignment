import data from "@/data.json";

export const liveLoader = () => {
  const live = data.filter((event) => event.status === "live");
  return { live };
};

export const upcomingLoader = () => {
  const upcoming = data.filter((event) => event.status === "upcoming");
  return { upcoming };
};

export const completedLoader = () => {
  const completed = data.filter((event) => event.status === "completed");
  return { completed };
};

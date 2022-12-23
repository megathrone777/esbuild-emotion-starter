import { TDevices } from "./types";

const devices: TDevices = {
  desktop: 1279,
  tablet: 1023,
  mobile: 767,
};

for (const device in devices) {
  const currentDevice = device as keyof TDevices;

  devices[currentDevice] = `@media (max-width: ${devices[currentDevice]}px)`;
}

console.log(devices);

// const devices = Object.keys(sizes).map((breakpoint) => ({
//   [breakpoint]: `@media (max-width: ${sizes[breakpoint as TDeviceName]}px)`,
// }));

export { devices };

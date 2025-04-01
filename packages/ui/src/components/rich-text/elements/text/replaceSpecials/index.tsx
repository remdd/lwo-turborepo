import { type ReactNode } from "react";
import reactStringReplace from "react-string-replace";

const contactUs = /{{contact us}}/g;
// const other = /{{other}}/g;
// const specials = [contactUs, other];

export function replaceSpecials(inputStr: string): ReactNode {
  // let output: ReactNode[] = [inputStr];
  // console.log(output);

  console.log(contactUs);

  return reactStringReplace(inputStr, contactUs, (match) => {
    return <span className="text-red-500">{match}</span>;
  });

  // specials.forEach((special) => {
  //   console.log(special);
  //   output = reactStringReplace(output, special, (match) => {
  //     console.log(match);
  //     return <span className="text-red-500">{match}</span>;
  //   });
  //   console.log(output);
  // });

  // console.log(outputStr);

  // return output;
}

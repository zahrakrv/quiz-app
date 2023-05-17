export type Buttontype = {
  bg: string;
  children: string | React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  style?: string;
  type?: string;
};

export enum SelectEnum {
  action = 'action',
  drama = 'drama',
  comedy = 'comedy',
}
export type Inputs = {
  number: number;
  difficulty: string;
  category: string;
  yupResolver: any;

  //   movieName: string;
  //   directorName: string;
  //   description: string;
  //   date: number;
  //   select: SelectEnum;
};

import React, { useState } from 'react';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import { ListItemButton } from '@mui/material';
import { Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { Data, ChangeNumberOfCorrect } from '../redux/slices/DataSlice';

type ListItemType = {
  question: string;
  item: string[];
  chooseVal: any;
  setChooseVal: any;
  setCurrentAnswer: any;
};
const ListButton = ({
  question,
  item,
  setChooseVal,
  chooseVal,
  setCurrentAnswer,
}: ListItemType) => {
  const dispatch = useDispatch();
  const data = useSelector(Data);
  // const [selectedIndex, setSelectedIndex] = useState(-1);
  // console.log(selectedIndex);
  const [value1, value2, value3, value4] = item;
  const handleListItemClick = (index: number) => {
    setChooseVal(index);
    // selectedIndex === -1 ? setChooseVal(false) : setChooseVal(true);
    setCurrentAnswer(item[index]);
  };

  //////
  // function shuffleArray(array: any[]) {
  //   for (let i = array.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [array[i], array[j]] = [array[j], array[i]];
  //   }
  //   return array;
  // }
  //////

  // const strings = [item[0], item[1], item[2], item[3]];
  // const shuffleArray = (array): any[] => {
  //   for (let i = array.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [array[i], array[j]] = [array[j], array[i]];
  //   }
  //   return array;
  // };
  // const [value1, value2, value3, value4] = shuffleArray(item).slice(0, 4);
  return (
    <>
      <Typography
        variant="h6"
        sx={{ width: 1, textAlign: 'center', fontWeight: 'bold' }}
      >
        {question}
      </Typography>
      <List component="nav">
        <ListItemButton
          selected={chooseVal === 0}
          onClick={() => handleListItemClick(0)}
        >
          <ListItemText primary={value1} />
        </ListItemButton>
        <ListItemButton
          selected={chooseVal === 1}
          onClick={() => handleListItemClick(1)}
        >
          <ListItemText primary={value2} />
        </ListItemButton>
        <ListItemButton
          selected={chooseVal === 2}
          onClick={() => handleListItemClick(2)}
        >
          <ListItemText primary={value3} />
        </ListItemButton>
        <ListItemButton
          selected={chooseVal === 3}
          onClick={() => handleListItemClick(3)}
        >
          <ListItemText primary={value4} />
        </ListItemButton>
      </List>
    </>
  );
};

export default ListButton;

import React, { FC, useEffect, useState } from "react";
import {
  map,
  filter,
  tap,
  delay,
  mergeMap,
  debounce,
  distinctUntilChanged,
  debounceTime,
} from "rxjs/operators";
import { BehaviorSubject, from } from "rxjs";

// pokeman 搜索实现
// 新建一个行为object,用来广播事件
const searchSubject = new BehaviorSubject("");
// 新建一个observer
const searchResultObservable = searchSubject.pipe(
  filter((val) => val.length > 1),
  // 节流时间点
  debounceTime(750),
  distinctUntilChanged(),
  mergeMap((val) => from(getPokenmonByName(val)))
);
const getPokenmonByName = async (name: string) => {
  const { results: allPokemons } = await fetch(
    "https://pokeapi.co/api/v2/pokemon/?limit=1000"
  ).then((res) => {
    console.log("先执行1");
    return res.json();
  });
  console.log("再执行2");

  return allPokemons.filter((item: { name: string | any[] }) =>
    item.name.includes(name)
  );
};

const useObservable = (observable: any, setter: any) => {
  useEffect(() => {
    let subscription = observable.subscribe((result: any) => {
      setter(result);
    });
    return () => subscription.unsubscribe();
  }, [observable, setter]);
};
export const Rxjs2: FC = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  useObservable(searchResultObservable, setResults);

  const handleSearchChange = (e: any) => {
    const newValue = e.target.value;
    setSearch(newValue);
    searchSubject.next(newValue);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={handleSearchChange}
      />
      <ul>
        {results.map((pokeman: any) => (
          <li key={pokeman.name}>{pokeman.name}</li>
        ))}
      </ul>
    </div>
  );
};

/* eslint-disable max-len */
import { createGlobalStyle } from 'styled-components';

// datePicker 커스텀 스타일
export const GlobalStyle = createGlobalStyle`
  .react-datepicker-wrapper {
    width: 100%;
  }

  .react-datepicker__input-container {
    width: 100%;
  }

  input {
    font-family: "SpoqaHanSansNeo-Regular";
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.6rem;
    color: #111322;
    padding: 1.6rem 2rem;
    border-radius: 0.6rem;
    border: 0.1rem solid #CBC9CF;
    outline: none;
    background: #FFF;
    width: 100%;
  }

  .react-datepicker {
    border-radius: 0.6rem;
    border: 0.1rem solid #E5E4E7;
    box-shadow: 0 0.4rem 2.5rem 0 rgba(0, 0, 0, 0.10);
    font-family: 'SpoqaHanSansNeo-Regular';
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2.2rem;
    color: #111322;
    padding: 1.2rem;
    width: 30.4rem;
  }

  .react-datepicker__triangle {
    display: none;
  }

  .react-datepicker__navigation {
    width: 1.6rem;
    height: 1.6rem;
    margin-top: 1.2rem;
  }

  .react-datepicker__navigation--previous {
    left: 0.6rem;
  }

  .react-datepicker__navigation-icon::before {
    border-width: 0.1rem 0.1rem 0 0;
    width: 0.8rem;
    height: 0.8rem;
  }

  .react-datepicker__navigation--next--with-time:not(.react-datepicker__navigation--next--with-today-button) {
    right: 10rem;
  }

  .react-datepicker__header {
    padding: 0;
    background: none;
    border-bottom: 0.1rem solid #E5E4E7;
  }

  .react-datepicker__month-container {
    width: 18.4rem;
  }

  .react-datepicker__current-month {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.6rem;
    color: #111322;
  }
  
  .react-datepicker__day-names {
    margin: 0.6rem 0 0.4rem;
    display: flex;
    justify-content: space-between;
  }

  .react-datepicker__day-name {
    color: #111322;
  }

  .react-datepicker__month {
    margin: 0.4rem 0 0;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  .react-datepicker__week {
    display: flex;
    justify-content: space-between;
  }

  .react-datepicker__day--outside-month {
    color: #cbc9cf;
  }

  .react-datepicker__day {
    width: 1.8rem;
    height: 1.8rem;
  }

  .react-datepicker__day:hover {
    background: #f2f2f3;
  }

  .react-datepicker__day--selected {
    background: #e5e4e7;
    border-radius: 0.2rem;
    color: #111322;
  }

  .react-datepicker__day--selected:hover {
    background: #e5e4e7;
    color: #111322;
  }

  .react-datepicker__time-container {
    border-left: 0.1rem solid #E5E4E7;
  }

  .react-datepicker__day--keyboard-selected {
    background: #e5e4e7;
  }

  .react-datepicker-time__header {
    font-family: 'SpoqaHanSansNeo-Regular';
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2.2rem;
    color: #111322;
    margin-bottom: 0.4rem;
  }

  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item {
    margin-left: 0.8rem;
  }

  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item:hover {
    background: #f2f2f3;
  }

  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected {
    background: #e5e4e7;
    color: #111322;
  }

  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected:hover {
    background: #e5e4e7;
    color: #111322;
  }

  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list {
    width: 8.8rem;
  }

  .react-datepicker__time-list::-webkit-scrollbar {
    width: 1.2rem;
  }

  .react-datepicker__time-list::-webkit-scrollbar-thumb {
    cursor: default;
    background: #7d7986;
    border-radius: 9999rem;
    background-clip: padding-box;
    border: 0.4rem solid transparent;
  }
`;

export const GlobalErrorStyle = createGlobalStyle`
  .react-datepicker-wrapper {
    width: 100%;
  }

  .react-datepicker__input-container {
    width: 100%;
  }

  input {
    font-family: "SpoqaHanSansNeo-Regular";
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.6rem;
    color: #111322;
    padding: 1.6rem 2rem;
    border-radius: 0.6rem;
    border: 0.1rem solid #ff4040;
    outline: none;
    background: #FFF;
    width: 100%
  }

  .react-datepicker {
    border-radius: 0.6rem;
    border: 0.1rem solid #E5E4E7;
    box-shadow: 0 0.4rem 2.5rem 0 rgba(0, 0, 0, 0.10);
    font-family: 'SpoqaHanSansNeo-Regular';
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2.2rem;
    color: #111322;
    padding: 1.2rem;
    width: 30.4rem;
  }

  .react-datepicker__triangle {
    display: none;
  }

  .react-datepicker__navigation {
    width: 1.6rem;
    height: 1.6rem;
    margin-top: 1.2rem;
  }

  .react-datepicker__navigation--previous {
    left: 0.6rem;
  }

  .react-datepicker__navigation-icon::before {
    border-width: 0.1rem 0.1rem 0 0;
    width: 0.8rem;
    height: 0.8rem;
  }

  .react-datepicker__navigation--next--with-time:not(.react-datepicker__navigation--next--with-today-button) {
    right: 10rem;
  }

  .react-datepicker__header {
    padding: 0;
    background: none;
    border-bottom: 0.1rem solid #E5E4E7;
  }

  .react-datepicker__month-container {
    width: 18.4rem;
  }

  .react-datepicker__current-month {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.6rem;
    color: #111322;
  }
  
  .react-datepicker__day-names {
    margin: 0.6rem 0 0.4rem;
    display: flex;
    justify-content: space-between;
  }

  .react-datepicker__day-name {
    color: #111322;
  }

  .react-datepicker__month {
    margin: 0.4rem 0 0;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  .react-datepicker__week {
    display: flex;
    justify-content: space-between;
  }

  .react-datepicker__day--outside-month {
    color: #cbc9cf;
  }

  .react-datepicker__day {
    width: 1.8rem;
    height: 1.8rem;
  }

  .react-datepicker__day:hover {
    background: #f2f2f3;
  }

  .react-datepicker__day--selected {
    background: #e5e4e7;
    border-radius: 0.2rem;
    color: #111322;
  }

  .react-datepicker__day--selected:hover {
    background: #e5e4e7;
    color: #111322;
  }

  .react-datepicker__time-container {
    border-left: 0.1rem solid #E5E4E7;
  }

  .react-datepicker__day--keyboard-selected {
    background: #e5e4e7;
  }

  .react-datepicker-time__header {
    font-family: 'SpoqaHanSansNeo-Regular';
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2.2rem;
    color: #111322;
    margin-bottom: 0.4rem;
  }

  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item {
    margin-left: 0.8rem;
  }

  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item:hover {
    background: #f2f2f3;
  }

  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected {
    background: #e5e4e7;
    color: #111322;
  }

  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected:hover {
    background: #e5e4e7;
    color: #111322;
  }

  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list {
    width: 8.8rem;
  }

  .react-datepicker__time-list::-webkit-scrollbar {
    width: 1.2rem;
  }

  .react-datepicker__time-list::-webkit-scrollbar-thumb {
    cursor: default;
    background: #7d7986;
    border-radius: 9999rem;
    background-clip: padding-box;
    border: 0.4rem solid transparent;
  }
`;

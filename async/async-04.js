/** resolve, reject 그리고 에러 핸들링 */

const delayAdd = (index, callback, error) => {
  setTimeout(() => {
    if (index > 10) {
      error(`${index}는 10보다 클 수 없습니다.`);
      return;
    }
    console.log("index: ", index);
    callback(index + 1);
  }, 1000);
};

// delayAdd(
//   4,
//   (res) => console.log(res),
//   (err) => console.log(err)
// );
// delayAdd(
//   13,
//   (res) => console.log(res),
//   (err) => console.log(err)
// );

/** 에러 핸들링
 * 정상적으로 로직이 동작하게 되면, 두 번째 인수 부분의 콜백이 실행되는 것이고
 * 정상적으로 로직이 동작하지 않으면, 세 번째 인수 부분의 콜백이 실행되는 구조입니다.
 */

const newDelayAdd = (idx) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (idx > 10) {
        reject(`${idx}는 10보다 클 수 없습니다.`);
        return;
      }
      console.log("index: ", idx);
      resolve(idx + 1);
    }, 1000);
  });
};

/** Promise 인스턴스를 반환하기 때문에 then 메서드를 사용할수 있게 된다
 * finally 메서드나 구문 같은 경우에는
 * 비동기 코드 내부의 resolve, reject가 실행되는 것과 상관없이
 * 항상 실행되는 구조입니다.
 */
newDelayAdd(18)
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log("done"));

const wrap = async () => {
  try {
    const res = await newDelayAdd(20);
    console.log(res);
  } catch (e) {
    console.log(e);
  } finally {
    /** finally 메서드나 구문 같은 경우에는 비동기 코드 내부의 resolve, reject가 실행되는 것과 상관없이 항상 실행되는 구조입니다. */
    console.log("done");
  }
};

wrap();

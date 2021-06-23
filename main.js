const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`


// 앞쪽 일치 (Lookahead)
// 이메일 주소의 아이디 부분(thesecon)
console.log(
  str.match(/.{1,}(?=\@)/g)
)

// 뒤쪽 일치 (Lookbehind)
// 이메일의 gmail.com 부분
console.log(
  str.match(/(?<=\@).{1,}/g)
)

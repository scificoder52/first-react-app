function Row3() {
  let myDate = new Date();

  return (
    <div class="row">
      <p>
        This is the current time:{myDate.toLocaleDateString()}-
        {myDate.toLocaleTimeString()}
      </p>
    </div>
  );
}
export default Row3;

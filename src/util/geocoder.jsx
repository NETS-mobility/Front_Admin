const { kakao } = window;
const GeoCoder = (addr, setValue) => {
  var geocoder = new kakao.maps.services.Geocoder();
  geocoder.addressSearch(addr, function (results, status) {
    if (status === kakao.maps.services.Status.OK) {
      var result = results[0]; //첫번째 결과의 값을 활용
      console.log("result==", result);
      setValue((prev) => ({ ...prev, x: result.x, y: result.y }));
    }
  });
};

export default GeoCoder;

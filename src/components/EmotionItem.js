const EmotionItem = ({emotion_id, emotion_img, emotion_descript, onClick, isSelected,}) => {
  return (
  <button 
  onClick={()=>onClick(emotion_id)} 
  className={["EmotionItem", isSelected ? `EmotionItem_on_${emotion_id}` : `EmotionItem_off`].join(" ")} 
  title={[isSelected ? '선택됨' : '']}>
    <img src={emotion_img} alt="" />
    <span>{emotion_descript}</span>
  </button>
  );
};

export default EmotionItem;
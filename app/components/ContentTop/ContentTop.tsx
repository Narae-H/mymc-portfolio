import Button from "@/app/components/Button/Button";
import styles from '@/app/components/ContentTop/contentTop.module.css';

export default function ContentTop(){
  const menus = [
    {
      title: 'New',
      selected: true
    },
    {
      title: 'Specials',
      selected: false
    },
    {
      title: 'Meals',
      selected: false
    },
    {
      title: 'Snacks & Treats',
      selected: false
    },
    {
      title: 'Drinks & Powders',
      selected: false
    },
    {
      title: 'Bundle & Save',
      selected: false
    },
  ]
  return (
    <div className={styles.contentTop}>
      {menus.map((item) => (
        <Button 
          key={item.title}
          type='button' 
          variant={item.selected? 'btn-black': 'btn-white'} 
          size='large'>
          {item.title}
        </Button>
      ))}
    </div>

  ) 
}
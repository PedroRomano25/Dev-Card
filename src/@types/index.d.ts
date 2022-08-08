declare global {
  interface ChildrenProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
  }

  interface IBodyCardProps extends ChildrenProps {
    className?: string;
  }
  interface IImageCardProps {
    image: string | StaticImport;
    checked: boolean;
    onClickWishList:() => void;
  }

  interface IContentCardProps {
    productName: string;
    oldPrice: number;
    price: number;
    numberInstallments?: number;
  }

  interface ICardProductProps
    extends IContentCardProps,
      IImageCardProps,
      IButtonProps {
        onClickButton:() => void;
        
      }

  interface IHomeProps {
    data: IProduct[];   
    onClickButton:(i?:number) => void;
    onClickWishList:(i?:number) => void;
  }

  interface IButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
      ChildrenProps {
    buttonActive: boolean;
  }

  interface IProduct {
    id: number;
    picture: string | StaticImport;
    name: string;
    oldPrice: number;
    price: number;
    numberInstallments: number;
    wishList: boolean;
    checked: boolean;
  }
}

export {};

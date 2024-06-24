import { JSX } from "react";

interface iconProps {
  width?: number;
  height?: number;
  color?: string;
}

export const ArrowLeft = ({ width, height, color }: iconProps): JSX.Element => {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 14}
      viewBox="0 0 24 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.29886 2.21499C8.52597 1.96531 8.64961 1.63508 8.64373 1.29386C8.63785 0.952644 8.50292 0.627084 8.26735 0.385769C8.03179 0.144454 7.71398 0.00622559 7.3809 0.000205199C7.04781 -0.00581519 6.72544 0.120842 6.48171 0.353494L0.908571 6.06092L0 6.99167L0.908571 7.92241L6.48 13.6298C6.72238 13.8699 7.04709 14.0028 7.3842 14C7.72132 13.9971 8.04386 13.8588 8.28235 13.6147C8.52085 13.3706 8.65622 13.0403 8.6593 12.695C8.66239 12.3496 8.53295 12.0169 8.29886 11.7683L4.92171 8.30876H22.7143C23.0553 8.30876 23.3823 8.17 23.6234 7.92299C23.8645 7.67599 24 7.34098 24 6.99167C24 6.64235 23.8645 6.30734 23.6234 6.06034C23.3823 5.81333 23.0553 5.67457 22.7143 5.67457H4.92171L8.29886 2.21499Z"
        fill={color ?? "#C5C5C5"}
      />
    </svg>
  );
};

export const ArrowRight = ({
  width,
  height,
  color,
}: iconProps): JSX.Element => {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 14}
      viewBox="0 0 24 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.7011 11.785C15.474 12.0347 15.3504 12.3649 15.3563 12.7061C15.3621 13.0474 15.4971 13.3729 15.7326 13.6142C15.9682 13.8555 16.286 13.9938 16.6191 13.9998C16.9522 14.0058 17.2746 13.8792 17.5183 13.6465L23.0914 7.93908L24 7.00833L23.0914 6.07759L17.52 0.370163C17.2776 0.130124 16.9529 -0.00279236 16.6158 4.48227e-05C16.2787 0.00288105 15.9561 0.141244 15.7176 0.38533C15.4792 0.629416 15.3438 0.959698 15.3407 1.30504C15.3376 1.65038 15.4671 1.98314 15.7011 2.23166L19.0783 5.69124L1.28571 5.69124C0.944721 5.69124 0.617695 5.83 0.376577 6.07701C0.13546 6.32401 0 6.65902 0 7.00833C0 7.35765 0.13546 7.69266 0.376577 7.93966C0.617695 8.18667 0.944721 8.32543 1.28571 8.32543L19.0783 8.32543L15.7011 11.785Z"
        fill={color ?? "#C5C5C5"}
      />
    </svg>
  );
};

export const ChevronLeft = ({
  width,
  height,
  color,
}: iconProps): JSX.Element => {
  return (
    <svg
      width={width ?? 6}
      height={height ?? 11}
      viewBox="0 0 6 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.7339 0.287878C5.6496 0.196622 5.54946 0.124223 5.43923 0.0748249C5.32899 0.0254269 5.21082 0 5.09148 0C4.97214 0 4.85396 0.0254269 4.74373 0.0748249C4.63349 0.124223 4.53336 0.196622 4.44906 0.287878L0.266486 4.80622C0.182011 4.89729 0.114992 5.00546 0.0692645 5.12454C0.0235374 5.24363 0 5.37129 0 5.50021C0 5.62913 0.0235374 5.75679 0.0692645 5.87587C0.114992 5.99496 0.182011 6.10313 0.266486 6.1942L4.44906 10.7125C4.53342 10.8037 4.63358 10.876 4.7438 10.9253C4.85403 10.9746 4.97217 11 5.09148 11C5.21079 11 5.32893 10.9746 5.43915 10.9253C5.54938 10.876 5.64954 10.8037 5.7339 10.7125C5.81826 10.6214 5.88518 10.5132 5.93084 10.3941C5.9765 10.2751 6 10.1474 6 10.0185C6 9.88966 5.9765 9.76204 5.93084 9.64296C5.88518 9.52388 5.81826 9.41569 5.7339 9.32455L2.19831 5.49529L5.7339 1.67586C6.08928 1.29195 6.08017 0.661945 5.7339 0.287878Z"
        fill={color ?? "#C5C5C5"}
      />
    </svg>
  );
};

export const Discord = ({ width, height, color }: iconProps): JSX.Element => {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 20}
      viewBox="0 0 24 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.307 1.66212C18.787 0.887325 17.1412 0.324972 15.4269 5.74827e-05C15.4119 -0.000468134 15.3969 0.00261616 15.3831 0.00909357C15.3693 0.015571 15.3569 0.0252842 15.3469 0.0375479C15.1412 0.44994 14.9012 0.987299 14.7412 1.39969C12.9228 1.09977 11.0736 1.09977 9.2553 1.39969C9.09529 0.974802 8.85529 0.44994 8.63814 0.0375479C8.62671 0.0125545 8.59242 5.74827e-05 8.55814 5.74827e-05C6.8438 0.324972 5.20947 0.887325 3.678 1.66212C3.66657 1.66212 3.65515 1.67462 3.64372 1.68712C0.53506 6.77328 -0.322107 11.722 0.100762 16.6207C0.100762 16.6457 0.112191 16.6707 0.135048 16.6832C2.19225 18.3328 4.16945 19.3325 6.12378 19.9948C6.15807 20.0073 6.19236 19.9948 6.20379 19.9698C6.66094 19.2825 7.07238 18.5577 7.42668 17.7954C7.44954 17.7454 7.42668 17.6954 7.38096 17.6829C6.72952 17.408 6.11236 17.0831 5.50662 16.7082C5.46091 16.6832 5.46091 16.6082 5.4952 16.5707C5.62091 16.4707 5.74663 16.3583 5.87235 16.2583C5.89521 16.2333 5.92949 16.2333 5.95235 16.2458C9.88389 18.2078 14.124 18.2078 18.0098 16.2458C18.0327 16.2333 18.067 16.2333 18.0898 16.2583C18.2155 16.3708 18.3413 16.4707 18.467 16.5832C18.5127 16.6207 18.5127 16.6957 18.4556 16.7207C17.8612 17.1081 17.2327 17.4205 16.5812 17.6954C16.5355 17.7079 16.5241 17.7704 16.5355 17.8079C16.9012 18.5702 17.3127 19.295 17.7584 19.9823C17.7927 19.9948 17.827 20.0073 17.8612 19.9948C19.827 19.3325 21.8042 18.3328 23.8614 16.6832C23.8843 16.6707 23.8957 16.6457 23.8957 16.6207C24.3986 10.9597 23.0614 6.04847 20.3527 1.68712C20.3413 1.67462 20.3299 1.66212 20.307 1.66212ZM8.02098 13.634C6.8438 13.634 5.86092 12.4468 5.86092 10.9847C5.86092 9.52256 6.82095 8.33538 8.02098 8.33538C9.23244 8.33538 10.1925 9.53506 10.181 10.9847C10.181 12.4468 9.22101 13.634 8.02098 13.634ZM15.9869 13.634C14.8097 13.634 13.8269 12.4468 13.8269 10.9847C13.8269 9.52256 14.7869 8.33538 15.9869 8.33538C17.1984 8.33538 18.1584 9.53506 18.147 10.9847C18.147 12.4468 17.1984 13.634 15.9869 13.634Z"
        fill={color ?? "#EEEEEE"}
      />
    </svg>
  );
};

export const Github = ({ width, height, color }: iconProps): JSX.Element => {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 0C10.4241 0 8.86371 0.318095 7.4078 0.936124C5.95189 1.55415 4.62902 2.46001 3.51472 3.60198C1.26428 5.90829 0 9.03631 0 12.2979C0 17.7336 3.444 22.3453 8.208 23.981C8.808 24.0793 9 23.6981 9 23.3661V21.2877C5.676 22.0256 4.968 19.6398 4.968 19.6398C4.416 18.2132 3.636 17.832 3.636 17.832C2.544 17.0695 3.72 17.0941 3.72 17.0941C4.92 17.1802 5.556 18.3608 5.556 18.3608C6.6 20.2301 8.364 19.6767 9.048 19.3815C9.156 18.5822 9.468 18.0411 9.804 17.7336C7.14 17.4262 4.344 16.3685 4.344 11.683C4.344 10.318 4.8 9.22344 5.58 8.35029C5.46 8.04284 5.04 6.76386 5.7 5.10364C5.7 5.10364 6.708 4.77159 9 6.35803C9.948 6.08747 10.98 5.9522 12 5.9522C13.02 5.9522 14.052 6.08747 15 6.35803C17.292 4.77159 18.3 5.10364 18.3 5.10364C18.96 6.76386 18.54 8.04284 18.42 8.35029C19.2 9.22344 19.656 10.318 19.656 11.683C19.656 16.3808 16.848 17.4139 14.172 17.7213C14.604 18.1025 15 18.8527 15 19.9964V23.3661C15 23.6981 15.192 24.0916 15.804 23.981C20.568 22.333 24 17.7336 24 12.2979C24 10.6829 23.6896 9.08376 23.0866 7.59171C22.4835 6.09966 21.5996 4.74395 20.4853 3.60198C19.371 2.46001 18.0481 1.55415 16.5922 0.936124C15.1363 0.318095 13.5759 0 12 0Z"
        fill={color ?? "#C5C5C5"}
      />
    </svg>
  );
};

export const Launch = ({ width, height, color }: iconProps): JSX.Element => {
  return (
    <svg
      width={width ?? 12}
      height={height ?? 12}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 0V2H8.586L0 10.586L1.414 12L10 3.414V10H12V0H2Z"
        fill={color ?? "#C5C5C5"}
      />
    </svg>
  );
};

export const Onboarding = ({
  width,
  height,
  color,
}: iconProps): JSX.Element => {
  return (
    <svg
      width={width ?? 28}
      height={height ?? 30}
      viewBox="0 0 28 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.8683 1H7.13167C5.45756 1 4.62122 1 3.94522 1.2282C3.3079 1.44723 2.73125 1.80569 2.26004 2.27574C1.78884 2.74579 1.43576 3.31479 1.22822 3.93854C1 4.61332 1 5.4477 1 7.11787V26.723C1 27.9242 2.42278 28.5626 3.32267 27.7646C3.57514 27.5385 3.90625 27.4129 4.25 27.4129C4.59375 27.4129 4.92486 27.5385 5.17733 27.7646L5.875 28.3834C6.3173 28.7798 6.89757 29 7.5 29C8.10243 29 8.6827 28.7798 9.125 28.3834C9.5673 27.987 10.1476 27.7668 10.75 27.7668C11.3524 27.7668 11.9327 27.987 12.375 28.3834C12.8173 28.7798 13.3976 29 14 29C14.6024 29 15.1827 28.7798 15.625 28.3834C16.0673 27.987 16.6476 27.7668 17.25 27.7668C17.8524 27.7668 18.4327 27.987 18.875 28.3834C19.3173 28.7798 19.8976 29 20.5 29C21.1024 29 21.6827 28.7798 22.125 28.3834L22.8227 27.7646C23.0751 27.5385 23.4063 27.4129 23.75 27.4129C24.0937 27.4129 24.4249 27.5385 24.6773 27.7646C25.5772 28.5626 27 27.9242 27 26.723V7.11787C27 5.4477 27 4.61192 26.7718 3.93994C26.5645 3.31588 26.2116 2.74656 25.7403 2.27624C25.2691 1.80592 24.6923 1.44727 24.0548 1.2282C23.3788 1 22.5424 1 20.8683 1Z"
        stroke={color ?? "#EEEEEE"}
        strokeWidth="1.5"
      />
      <path
        d="M11.8334 13.5998H21.2223M6.77783 13.5998H7.50005M6.77783 8.69995H7.50005M6.77783 18.4997H7.50005M11.8334 8.69995H21.2223M11.8334 18.4997H21.2223"
        stroke={color ?? "#EEEEEE"}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const ProofOfID = ({ width, height, color }: iconProps): JSX.Element => {
  return (
    <svg
      width={width ?? 28}
      height={height ?? 28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.7273 0H1.27273C0.56875 0 0 0.446875 0 1V8H28V1C28 0.446875 27.4312 0 26.7273 0ZM5.09091 5.25C4.21193 5.25 3.5 4.69063 3.5 4C3.5 3.30938 4.21193 2.75 5.09091 2.75C5.96989 2.75 6.68182 3.30938 6.68182 4C6.68182 4.69063 5.96989 5.25 5.09091 5.25ZM0 27C0 27.5531 0.56875 28 1.27273 28H26.7273C27.4312 28 28 27.5531 28 27V20H0V27ZM5.09091 22.75C5.96989 22.75 6.68182 23.3094 6.68182 24C6.68182 24.6906 5.96989 25.25 5.09091 25.25C4.21193 25.25 3.5 24.6906 3.5 24C3.5 23.3094 4.21193 22.75 5.09091 22.75ZM0 18H28V10H0V18ZM5.09091 12.75C5.96989 12.75 6.68182 13.3094 6.68182 14C6.68182 14.6906 5.96989 15.25 5.09091 15.25C4.21193 15.25 3.5 14.6906 3.5 14C3.5 13.3094 4.21193 12.75 5.09091 12.75Z"
        fill={color ?? "#EEEEEE"}
      />
    </svg>
  );
};

export const SiteMap = ({ width, height, color }: iconProps): JSX.Element => {
  return (
    <svg
      width={width ?? 28}
      height={height ?? 28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28 20.4167V26.25C28 26.7361 27.8542 27.1493 27.5625 27.4896C27.2708 27.8299 26.9167 28 26.5 28H21.5C21.0833 28 20.7292 27.8299 20.4375 27.4896C20.1458 27.1493 20 26.7361 20 26.25V20.4167C20 19.9306 20.1458 19.5174 20.4375 19.1771C20.7292 18.8368 21.0833 18.6667 21.5 18.6667H23V15.1667H15V18.6667H16.5C16.9167 18.6667 17.2708 18.8368 17.5625 19.1771C17.8542 19.5174 18 19.9306 18 20.4167V26.25C18 26.7361 17.8542 27.1493 17.5625 27.4896C17.2708 27.8299 16.9167 28 16.5 28H11.5C11.0833 28 10.7292 27.8299 10.4375 27.4896C10.1458 27.1493 10 26.7361 10 26.25V20.4167C10 19.9306 10.1458 19.5174 10.4375 19.1771C10.7292 18.8368 11.0833 18.6667 11.5 18.6667H13V15.1667H5V18.6667H6.5C6.91667 18.6667 7.27083 18.8368 7.5625 19.1771C7.85417 19.5174 8 19.9306 8 20.4167V26.25C8 26.7361 7.85417 27.1493 7.5625 27.4896C7.27083 27.8299 6.91667 28 6.5 28H1.5C1.08333 28 0.729167 27.8299 0.4375 27.4896C0.145833 27.1493 0 26.7361 0 26.25V20.4167C0 19.9306 0.145833 19.5174 0.4375 19.1771C0.729167 18.8368 1.08333 18.6667 1.5 18.6667H3V15.1667C3 14.5347 3.19792 13.9878 3.59375 13.526C3.98958 13.0642 4.45833 12.8333 5 12.8333H13V9.33333H11.5C11.0833 9.33333 10.7292 9.16319 10.4375 8.82292C10.1458 8.48264 10 8.06944 10 7.58333V1.75C10 1.26389 10.1458 0.850694 10.4375 0.510417C10.7292 0.170139 11.0833 0 11.5 0H16.5C16.9167 0 17.2708 0.170139 17.5625 0.510417C17.8542 0.850694 18 1.26389 18 1.75V7.58333C18 8.06944 17.8542 8.48264 17.5625 8.82292C17.2708 9.16319 16.9167 9.33333 16.5 9.33333H15V12.8333H23C23.5417 12.8333 24.0104 13.0642 24.4062 13.526C24.8021 13.9878 25 14.5347 25 15.1667V18.6667H26.5C26.9167 18.6667 27.2708 18.8368 27.5625 19.1771C27.8542 19.5174 28 19.9306 28 20.4167Z"
        fill={color ?? "#EEEEEE"}
      />
    </svg>
  );
};

export const Tokenize = ({ width, height, color }: iconProps): JSX.Element => {
  return (
    <svg
      width={width ?? 30}
      height={height ?? 30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1V27.25C1 27.7141 1.18437 28.1592 1.51256 28.4874C1.84075 28.8156 2.28587 29 2.75 29H29M8 22L12.375 12.375L17.625 17.625L24.2278 6.25L29 10.9172"
        stroke={color ?? "#EEEEEE"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Twitter = ({ width, height, color }: iconProps): JSX.Element => {
  return (
    <svg
      width={width ?? 20}
      height={height ?? 20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9032 8.469L19.3474 0H17.5832L11.1179 7.353L5.95579 0H0L7.80842 11.12L0 20H1.76421L8.59158 12.235L14.0442 20H20L11.9032 8.469ZM9.48632 11.217L8.69474 10.11L2.4 1.3H5.11053L10.1905 8.41L10.9811 9.517L17.5842 18.759H14.8747L9.48632 11.217Z"
        fill={color ?? "#C5C5C5"}
      />
    </svg>
  );
};
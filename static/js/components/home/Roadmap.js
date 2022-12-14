import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Row, Col } from "react-bootstrap";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import "./Roadmap.css";

function Roadmap() {
  return (
    <Container className="Roadmap">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="Roadmapslider"
      >
        <SwiperSlide>
          <Row>
            <Col
              xs="1"
              sm="1"
              md="1"
              lg="1"
              xl="1"
              xxl="1"
              className="justify-content-start"
            ></Col>
            <Col xs="12" sm="12" md="12" lg="3" xl="3" xxl="3">
              <h3 className="onih3">PHASE ONE</h3>
            </Col>
            <Col xs="12" sm="12" md="12" lg="7" xl="7" xxl="7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1285.192"
                height="458.514"
                viewBox="0 0 1285.192 458.514"
                className="roadmapimage"
              >
                <g
                  strokeWidth="1"
                  data-name="Group 311"
                  transform="translate(0 -.586)"
                >
                  <path
                    d="M311.159 132.202c-5.912-19.128-16-53.561-22.258-78.6h-1.044c-3.826 27.127-9.042 60.169-12.87 81.035l-13.911 79.992H213.43L250.297 5.955h73.034l21.91 69.9c7.306 24.693 16.348 56.691 21.912 80.34h1.043c3.823-25.388 7.651-50.428 11.129-69.9l14.261-80.34h47.646l-36.865 208.674h-66.43z"
                    data-name="Path 72"
                  ></path>
                  <path
                    d="M424.877 214.628L461.396 5.955h50.081L474.96 214.628z"
                    data-name="Path 73"
                  ></path>
                  <path
                    d="M92.76 376.868H64.242l-13.564 76.86H.6l36.863-208.672h87.991c53.558 0 77.208 27.82 69.556 73.034-5.217 30.953-23.3 47.994-50.776 54.95l41.038 79.992v.7H126.5zm-13.216-87.3l-8 45.907h40.691c19.826 0 31.3-7.3 33.737-20.867 2.782-16.346-4.869-25.04-25.04-25.04z"
                    data-name="Path 74"
                  ></path>
                  <path
                    d="M233.608 245.056h157.2l-8.347 47.3H275.344l-6.26 35.128h98.772l-7.3 41.734H261.78l-6.608 37.213H362.64l-8.349 47.3H196.743z"
                    data-name="Path 75"
                  ></path>
                  <path
                    d="M431.149 406.429h89.382l-8.347 47.3H372.719l36.519-208.673h50.087z"
                    data-name="Path 76"
                  ></path>
                  <path
                    d="M563.301 245.056h157.2l-8.347 47.3H605.035l-6.26 35.128h98.775l-7.307 41.732h-98.772l-6.608 37.213H692.33l-8.347 47.3H526.436z"
                    data-name="Path 77"
                  ></path>
                  <path
                    d="M688.147 453.729L805.7 245.056h58.777L907.95 453.73z"
                    data-name="Path 78"
                  ></path>
                  <path
                    d="M707.905 437.103l102.04-182.171h47.44c.487 3.337 37.352 182.171 37.352 182.171z"
                    data-name="Path 79"
                  ></path>
                  <path
                    d="M727.657 420.482l86.53-155.67h36.1c.974 6.677 31.231 155.67 31.231 155.67z"
                    data-name="Path 80"
                  ></path>
                  <path
                    d="M747.411 403.854l71.019-129.168h24.762c1.461 10.016 25.11 129.168 25.11 129.168z"
                    data-name="Path 81"
                  ></path>
                  <path
                    d="M767.165 387.23l55.508-102.665h13.424c1.948 13.353 18.989 102.665 18.989 102.665z"
                    data-name="Path 82"
                  ></path>
                  <path
                    d="M786.921 370.607h54.949s-10.434-59.471-12.868-76.164h-2.087z"
                    data-name="Path 83"
                  ></path>
                  <path
                    d="M905.167 386.259l50.431-9.388c.7 25.038 18.085 38.6 45.907 38.6 19.824 0 30.955-6.258 33.039-17.389 2.437-14.952-6.258-22.258-43.125-28.866-54.952-9.39-68.863-36.865-62.6-73.732 5.912-34.43 35.822-55.3 86.252-55.3 61.558 0 79.294 30.953 82.424 67.124l-51.472 10.084c-1.739-23.649-10.781-35.126-36.865-35.126-19.13 0-29.564 6.956-31.3 17.389-2.087 11.827 2.087 21.565 44.171 28.866 57.384 10.088 68.861 39.649 62.949 73.384-6.26 34.78-34.431 56.691-89.034 56.691-67.128.004-89.384-33.036-90.777-72.337z"
                    data-name="Path 84"
                  ></path>
                  <path
                    d="M1127.396 245.056h157.2l-8.347 47.3H1169.13l-6.26 35.128h98.775l-7.306 41.732h-98.772l-6.608 37.213h107.467l-8.347 47.3h-157.548z"
                    data-name="Path 85"
                  ></path>
                  <path
                    d="M4.072 99.163C14.157 41.429 59.021 1.086 119.885 1.086c35.126 0 61.994 12.955 78.558 34.474s22.823 51.6 16.737 85.861c-10.433 57.386-53.561 98.077-116.509 98.077-36 0-62.69-13.129-78.862-34.735s-21.824-51.691-15.737-85.6z"
                    data-name="Path 86"
                  ></path>
                  <path
                    d="M118.169 15.583c11.164 0 23.193 1.65 32.287 4.508a71.841 71.841 0 0136.758 25.912c13.455 18.2 19.078 45.025 13.948 73.562-2.63 14.635-8.019 29.872-15.32 41.421a91.539 91.539 0 01-44.353 36.815c-11.694 4.562-26.655 7.2-41 7.2-11.316 0-23.4-1.637-32.479-4.465a70.323 70.323 0 01-36.821-26.173c-13.134-18.259-18.12-45.077-13.114-73.349 2.584-14.592 7.916-29.777 15.215-41.267a92.789 92.789 0 0144.04-36.754c11.764-4.695 26.71-7.41 40.839-7.41z"
                    data-name="Path 87"
                  ></path>
                  <path
                    d="M116.448 30.081c8.932 0 20.8 1.4 28.1 3.606a58.7 58.7 0 0131.436 22.755c10.388 14.826 15.261 38.436 11.159 61.266-2.106 11.707-6.58 26.212-12.257 35.552a74.546 74.546 0 01-37.51 31.481c-9.4 3.541-23.595 5.758-35.072 5.758-9.053 0-20.963-1.391-28.253-3.571a57.58 57.58 0 01-31.487-22.967c-10.138-14.866-14.5-38.476-10.49-61.092 2.067-11.672 6.5-26.134 12.172-35.428a75.452 75.452 0 0137.26-31.431c9.457-3.645 23.64-5.929 34.942-5.929z"
                    data-name="Path 88"
                  ></path>
                  <path
                    d="M114.729 44.579c6.7 0 18.413 1.139 23.912 2.7a45.976 45.976 0 0126.114 19.61c7.4 11.386 11.446 31.844 8.369 48.968-1.578 8.779-5.112 22.571-9.192 29.683a57.876 57.876 0 01-30.668 26.147c-7.093 2.539-20.534 4.317-29.142 4.317-6.79 0-18.537-1.126-24.027-2.678a45.219 45.219 0 01-26.152-19.756c-7.219-11.4-10.873-31.876-7.869-48.837 1.55-8.755 5.052-22.515 9.129-29.59a58.486 58.486 0 0130.481-26.11c7.139-2.619 20.568-4.454 29.045-4.454z"
                    data-name="Path 89"
                  ></path>
                  <path
                    d="M113.01 59.077c4.465 0 16.035.843 19.726 1.8 9.488 2.467 16.344 8.79 20.789 16.45 4.545 7.829 7.632 25.256 5.58 36.671-1.052 5.854-3.593 18.972-6.128 23.812-5.028 9.6-13.118 17.278-23.827 20.813-4.767 1.574-17.474 2.88-23.21 2.88-4.528 0-16.12-.835-19.8-1.787-9.586-2.476-16.439-8.829-20.815-16.554-4.432-7.829-7.247-25.277-5.245-36.585 1.032-5.836 3.552-18.932 6.086-23.751 5.036-9.581 13.137-17.224 23.7-20.789 4.798-1.615 17.492-2.96 23.144-2.96z"
                    data-name="Path 90"
                  ></path>
                  <path
                    d="M111.291 73.576c2.232 0 13.677.487 15.539.9 7.486 1.665 13.759 6.41 15.466 13.3 2.76 3.587 3.817 18.667 2.791 24.373-.526 2.928-1.958 15.446-3.065 17.946-3.271 7.39-8.925 13.192-16.985 15.478-2.417.685-14.413 1.439-17.283 1.439-2.263 0-13.718-.483-15.576-.893-7.536-1.665-13.8-6.438-15.478-13.348-2.7-3.6-3.626-18.676-2.624-24.33.517-2.919 1.939-15.426 3.043-17.915 3.278-7.377 8.938-13.155 16.924-15.465 2.432-.707 14.422-1.485 17.248-1.485z"
                    data-name="Path 91"
                  ></path>
                  <path
                    d="M88.079 98.215v24.152a10.144 10.144 0 0010.144 10.144h22.7a10.146 10.146 0 0010.144-10.144V98.215a10.146 10.146 0 00-10.142-10.144h-22.7a10.144 10.144 0 00-10.146 10.144z"
                    data-name="Path 92"
                  ></path>
                </g>
              </svg>
              <p>
                The Oni-nous Experiment from The Sixth Stage is more than a
                simple collection of 6,667 NFTs. The NFT is simply a shell that
                allows you to enter into a virtual world where you will
                experience everything as a different person.
              </p>
            </Col>
          </Row>
        </SwiperSlide>
        <SwiperSlide>
          <Row>
            <Col xs="12" sm="12" md="12" lg="3" xl="3" xxl="3">
              <h3 className="onih3">PHASE TWO</h3>
            </Col>
            <Col xs="12" sm="12" md="12" lg="9" xl="9" xxl="9">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="521.364"
                height="454.884"
                viewBox="0 0 521.364 454.884"
                className="roadmapimage"
              >
                <g
                  strokeWidth="1"
                  data-name="Group 301"
                  transform="translate(443.345 -8.575)"
                >
                  <path
                    d="M-425.906 106.143c9.982-57.14 54.384-97.068 114.624-97.068 34.765 0 61.357 12.822 77.749 34.119s22.588 51.073 16.565 84.978c-10.326 56.8-53.01 97.068-115.311 97.068-35.627 0-62.045-12.994-78.05-34.377s-21.6-51.16-15.577-84.72z"
                    data-name="Path 93"
                  ></path>
                  <path
                    d="M-312.986 23.425c11.049 0 22.956 1.633 31.955 4.462a71.1 71.1 0 0136.38 25.645c13.316 18.008 18.882 44.562 13.8 72.806-2.6 14.485-7.936 29.565-15.162 40.995a90.6 90.6 0 01-43.9 36.436c-11.574 4.516-26.381 7.125-40.58 7.125-11.2 0-23.156-1.62-32.144-4.419a69.6 69.6 0 01-36.443-25.9c-13-18.071-17.933-44.613-12.979-72.591 2.558-14.442 7.835-29.47 15.059-40.842a91.835 91.835 0 0143.596-36.379c11.643-4.651 26.435-7.338 40.418-7.338z"
                    data-name="Path 94"
                  ></path>
                  <path
                    d="M-314.687 37.774c8.84 0 20.586 1.39 27.81 3.569a58.091 58.091 0 0131.109 22.524c10.281 14.674 15.1 38.041 11.045 60.636-2.085 11.587-6.512 25.942-12.131 35.186a73.779 73.779 0 01-37.125 31.157c-9.3 3.5-23.352 5.7-34.711 5.7-8.96 0-20.747-1.377-27.962-3.535a56.988 56.988 0 01-31.163-22.73c-10.034-14.713-14.347-38.08-10.382-60.464 2.046-11.552 6.43-25.865 12.047-35.064a74.667 74.667 0 0136.882-31.108c9.357-3.611 23.395-5.871 34.581-5.871z"
                    data-name="Path 95"
                  ></path>
                  <path
                    d="M-316.388 52.12c6.63 0 18.223 1.127 23.666 2.676a45.5 45.5 0 0125.845 19.4c7.321 11.268 11.329 31.516 8.282 48.464-1.562 8.689-5.06 22.339-9.1 29.378a57.281 57.281 0 01-30.352 25.878c-7.02 2.513-20.323 4.272-28.842 4.272-6.721 0-18.346-1.114-23.78-2.65a44.753 44.753 0 01-25.88-19.553c-7.144-11.286-10.761-31.548-7.788-48.335 1.534-8.665 5-22.283 9.035-29.285a57.884 57.884 0 0130.173-25.841c7.06-2.588 20.351-4.404 28.741-4.404z"
                    data-name="Path 96"
                  ></path>
                  <path
                    d="M-318.087 66.47c4.419 0 15.87.835 19.523 1.786 9.39 2.442 16.175 8.7 20.575 16.281 4.5 7.749 7.553 25 5.522 36.294-1.041 5.793-3.556 18.776-6.064 23.567-4.976 9.5-12.983 17.1-23.582 20.6-4.718 1.558-17.294 2.85-22.971 2.85-4.481 0-15.954-.826-19.6-1.768-9.487-2.45-16.27-8.739-20.6-16.384-4.386-7.749-7.172-25.017-5.191-36.208 1.022-5.776 3.515-18.738 6.024-23.507 4.985-9.483 13-17.047 23.458-20.575 4.749-1.604 17.312-2.936 22.906-2.936z"
                    data-name="Path 97"
                  ></path>
                  <path
                    d="M-319.79 80.819c2.209 0 13.536.482 15.379.893 7.409 1.648 13.618 6.344 15.306 13.159 2.732 3.55 3.778 18.475 2.762 24.122-.521 2.9-1.938 15.287-3.033 17.761-3.238 7.314-8.833 13.056-16.81 15.319-2.392.678-14.265 1.424-17.1 1.424-2.239 0-13.577-.478-15.416-.884-7.463-1.643-13.663-6.372-15.323-13.21-2.668-3.565-3.588-18.484-2.6-24.079.512-2.889 1.919-15.268 3.012-17.731 3.244-7.3 8.846-13.02 16.75-15.306 2.41-.698 14.276-1.468 17.073-1.468z"
                    data-name="Path 98"
                  ></path>
                  <path
                    d="M-342.765 105.207v23.9a10.04 10.04 0 0010.042 10.041h22.466a10.041 10.041 0 0010.04-10.04v-23.9a10.041 10.041 0 00-10.04-10.04h-22.466a10.04 10.04 0 00-10.042 10.039z"
                    data-name="Path 99"
                  ></path>
                  <path
                    d="M-176.749 343.862c9.982-57.14 54.384-97.069 114.622-97.069 34.765 0 61.357 12.822 77.749 34.119s22.588 51.073 16.565 84.978c-10.326 56.8-53.01 97.068-115.311 97.068-35.627 0-62.045-12.994-78.05-34.377s-21.598-51.159-15.575-84.719z"
                    data-name="Path 100"
                  ></path>
                  <path
                    d="M-63.827 261.141c11.049 0 22.954 1.633 31.955 4.462a71.1 71.1 0 0136.38 25.645c13.316 18.008 18.882 44.562 13.8 72.806-2.6 14.485-7.936 29.565-15.162 40.995a90.6 90.6 0 01-43.9 36.436c-11.574 4.516-26.381 7.125-40.58 7.125-11.2 0-23.156-1.62-32.144-4.419a69.6 69.6 0 01-36.443-25.9c-13-18.071-17.933-44.613-12.979-72.591 2.558-14.442 7.835-29.47 15.059-40.842a91.835 91.835 0 0143.587-36.376c11.652-4.654 26.444-7.341 40.427-7.341z"
                    data-name="Path 101"
                  ></path>
                  <path
                    d="M-65.528 275.489c8.84 0 20.586 1.39 27.81 3.569a58.091 58.091 0 0131.114 22.524c10.281 14.674 15.1 38.041 11.043 60.636-2.082 11.587-6.51 25.942-12.129 35.186a73.778 73.778 0 01-37.125 31.157c-9.3 3.5-23.352 5.7-34.711 5.7-8.96 0-20.747-1.377-27.962-3.535a56.988 56.988 0 01-31.163-22.73c-10.034-14.713-14.347-38.08-10.382-60.464 2.046-11.552 6.43-25.865 12.047-35.064a74.667 74.667 0 0136.877-31.107c9.358-3.612 23.395-5.872 34.581-5.872z"
                    data-name="Path 102"
                  ></path>
                  <path
                    d="M-67.23 289.839c6.63 0 18.223 1.127 23.666 2.676a45.5 45.5 0 0125.845 19.4c7.321 11.268 11.329 31.516 8.282 48.464-1.562 8.689-5.06 22.339-9.1 29.378a57.28 57.28 0 01-30.353 25.882c-7.02 2.513-20.323 4.272-28.842 4.272-6.721 0-18.346-1.114-23.78-2.65a44.754 44.754 0 01-25.878-19.557c-7.144-11.286-10.761-31.548-7.788-48.335 1.534-8.665 5-22.283 9.035-29.285a57.884 57.884 0 0130.167-25.841c7.065-2.588 20.356-4.404 28.746-4.404z"
                    data-name="Path 103"
                  ></path>
                  <path
                    d="M-68.931 304.188c4.419 0 15.87.835 19.523 1.786 9.39 2.442 16.175 8.7 20.575 16.281 4.5 7.749 7.553 25 5.522 36.294-1.041 5.793-3.556 18.776-6.064 23.567-4.976 9.5-12.983 17.1-23.582 20.6-4.718 1.558-17.294 2.85-22.971 2.85-4.481 0-15.954-.826-19.6-1.768-9.487-2.45-16.27-8.738-20.6-16.384-4.386-7.749-7.172-25.017-5.191-36.208 1.022-5.776 3.515-18.738 6.024-23.507 4.984-9.483 13-17.047 23.458-20.575 4.749-1.604 17.312-2.936 22.906-2.936z"
                    data-name="Path 104"
                  ></path>
                  <path
                    d="M-70.633 318.537c2.209 0 13.536.482 15.379.893 7.409 1.648 13.618 6.344 15.306 13.159 2.732 3.55 3.778 18.475 2.762 24.122-.521 2.9-1.938 15.287-3.033 17.761-3.238 7.314-8.833 13.056-16.81 15.319-2.392.678-14.265 1.424-17.1 1.424-2.24 0-13.577-.478-15.416-.884-7.458-1.648-13.658-6.372-15.319-13.211-2.668-3.565-3.588-18.484-2.6-24.079.512-2.889 1.919-15.268 3.012-17.731 3.244-7.3 8.846-13.02 16.75-15.306 2.406-.697 14.272-1.467 17.069-1.467z"
                    data-name="Path 105"
                  ></path>
                  <path
                    d="M-93.606 342.923v23.9a10.04 10.04 0 0010.04 10.041h22.468a10.041 10.041 0 0010.04-10.04v-23.9a10.041 10.041 0 00-10.04-10.04h-22.468a10.04 10.04 0 00-10.04 10.039z"
                    data-name="Path 106"
                  ></path>
                  <path
                    d="M-121.403 138.906c-5.867-18.988-15.878-53.161-22.094-78.01h-1.035c-3.8 26.923-8.975 59.719-12.772 80.43l-13.807 79.4h-47.293l36.591-207.13h72.492l21.751 69.387c7.25 24.51 16.225 56.269 21.747 79.741h1.035c3.8-25.2 7.6-50.054 11.047-69.385l14.149-79.743H7.702l-36.591 207.121h-65.935z"
                    data-name="Path 107"
                  ></path>
                  <path
                    d="M-8.532 220.717L27.715 13.596h49.707L41.176 220.717z"
                    data-name="Path 108"
                  ></path>
                  <path
                    d="M-370.629 346.282l-47.292-5.178c11.392-54.887 44.186-89.407 100.106-89.407 54.541 0 81.813 26.925 73.182 75.944-6.557 35.9-38.316 53.851-93.2 63.863-32.1 6.9-43.5 12.426-48.328 27.96 12.082-.346 24.854-.691 33.829-.691h94.587l-7.6 44.186h-177.431c1.037-7.94 1.727-15.881 3.106-24.165 8.631-49.707 35.21-71.455 89.751-83.19 45.222-9.668 54.541-17.262 57.3-32.8 2.762-14.844-6.213-27.27-28.306-27.27-25.54.004-42.11 15.538-49.704 50.748z"
                    data-name="Path 109"
                  ></path>
                  <path
                    d="M-192.012 419.156l28.487 43.8h-81.049l8.629-43.606z"
                    data-name="Path 110"
                  ></path>
                </g>
              </svg>
              <p>
                To be able to discover the park throughout the eyes of your Oni,
                we are delivering a 2.0 version to all owners. This will include
                a body and some other updates in the Oni mechanics. We will do
                some polish in their behaviour as well, because some of them
                tend to be a little "disobedient".
              </p>
            </Col>
          </Row>
        </SwiperSlide>
        <SwiperSlide>
          <Row>
            <Col xs="12" sm="12" md="12" lg="3" xl="3" xxl="3">
              <h3 className="onih3">PHASE THREE</h3>
            </Col>
            <Col xs="12" sm="12" md="12" lg="9" xl="9" xxl="9">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1319.633"
                height="452.725"
                viewBox="0 0 1319.633 452.725"
                className="roadmapimage"
              >
                <g
                  strokeWidth="1"
                  data-name="Group 302"
                  transform="translate(-.692 -.58)"
                >
                  <path
                    d="M62.361 146.482l-11.1 62.81H1.287L37.722 1.082h76.69c54.48 0 81.893 31.926 73.219 80.507-6.94 39.558-38.866 64.891-89.529 64.891zm17.7-100.98l-10.06 56.563h29.494c21.167 0 34.007-6.594 37.13-24.984 3.471-19.779-5.2-31.578-27.761-31.578z"
                    data-name="Path 132"
                  ></path>
                  <path
                    d="M467.67 132.6h-28.455l-13.534 76.69h-49.972L412.494 1.082h87.795c53.44 0 77.036 27.761 69.4 72.873-5.205 30.884-23.25 47.889-50.663 54.828l40.947 79.813v.694h-58.642zm-13.188-87.1l-7.98 45.806h40.6c19.781 0 31.232-7.288 33.661-20.821 2.776-16.309-4.854-24.985-24.986-24.985z"
                    data-name="Path 133"
                  ></path>
                  <path
                    d="M634.58 131.209l-13.88 78.078h-49.971L607.167 1.08h50.315l-15.963 89.877h1.737L730.009 1.08h60.728l-.348.694-112.086 113.125 77.732 93.694v.694H698.43z"
                    data-name="Path 134"
                  ></path>
                  <path
                    d="M62.361 389.992l-11.1 62.81H1.292l36.433-208.21h76.69c54.48 0 81.893 31.926 73.219 80.507-6.942 39.561-38.867 64.893-89.53 64.893zm17.7-100.98l-10.064 56.563h29.495c21.167 0 34.007-6.594 37.13-24.984 3.471-19.779-5.2-31.578-27.761-31.578z"
                    data-name="Path 135"
                  ></path>
                  <path
                    d="M271.259 376.113h-28.455l-13.534 76.69h-49.971l36.784-208.211h87.795c53.44 0 77.038 27.761 69.4 72.873-5.205 30.884-23.25 47.889-50.663 54.828l40.947 79.813v.694H304.92zm-13.188-87.1l-7.98 45.806h40.6c19.781 0 31.232-7.288 33.661-20.821 2.777-16.308-4.857-24.984-24.984-24.984z"
                    data-name="Path 136"
                  ></path>
                  <path
                    d="M411.796 244.594h156.848l-8.328 47.2h-106.88l-6.246 35.047h98.552l-7.288 41.643h-98.55l-6.594 37.13h107.227l-8.333 47.191h-157.2z"
                    data-name="Path 137"
                  ></path>
                  <path
                    d="M611.327 452.803l-43.723-208.211h52.052l19.084 108.271c3.125 16.656 5.9 34.007 8.328 50.663h2.428c8.676-16.656 17.7-34.007 26.721-50.663l57.952-108.271h52.746L669.627 452.803z"
                    data-name="Path 138"
                  ></path>
                  <path
                    d="M753.6 452.803l36.438-208.211h49.969l-36.438 208.211z"
                    data-name="Path 139"
                  ></path>
                  <path
                    d="M862.211 244.594h156.849l-8.328 47.2h-106.88l-6.246 35.047h98.552l-7.288 41.643h-98.552l-6.594 37.13h107.228l-8.328 47.194h-157.2z"
                    data-name="Path 140"
                  ></path>
                  <path
                    d="M1101.646 452.803h-67.667l-14.228-208.211h52.4l2.777 89.183c.694 26.027.694 49.623-.348 74.607h2.431c8.676-25.679 17.7-49.971 27.069-74.607l35.39-89.183h63.156l3.125 89.183c.346 24.636 0 48.929-.694 74.607h2.429c8.328-24.985 17.35-48.581 26.719-74.607l32.966-89.183h52.4l-87.8 208.208h-68.703l-1.388-92.652c0-23.25.346-49.623 1.04-73.913h-2.08c-7.982 24.29-17.353 50.663-25.681 73.913z"
                    data-name="Path 141"
                  ></path>
                  <path
                    d="M141.48 208.991L258.435 1.377h58.479l43.252 207.614z"
                    data-name="Path 142"
                  ></path>
                  <path
                    d="M161.133 192.451L262.654 11.204h47.2c.484 3.322 37.162 181.247 37.162 181.247z"
                    data-name="Path 143"
                  ></path>
                  <path
                    d="M180.789 175.907L266.88 21.033h35.916c.969 6.643 31.072 154.879 31.072 154.879z"
                    data-name="Path 144"
                  ></path>
                  <path
                    d="M200.443 159.371l70.659-128.512h24.636c1.453 9.965 24.982 128.512 24.982 128.512z"
                    data-name="Path 145"
                  ></path>
                  <path
                    d="M220.096 142.831l55.226-102.144h13.356c1.938 13.285 18.892 102.144 18.892 102.144z"
                    data-name="Path 146"
                  ></path>
                  <path
                    d="M239.75 126.291h54.668s-10.38-59.169-12.8-75.777h-2.076z"
                    data-name="Path 147"
                  ></path>
                </g>
              </svg>
              <p>
                For the investors we will be releasing limited access to some
                parts of the park before opening, like the Hell of Fame, the
                official museum of the Oni-nous.
              </p>
            </Col>
          </Row>
        </SwiperSlide>
        <SwiperSlide>
          <Row>
            <Col xs="12" sm="12" md="12" lg="3" xl="3" xxl="3">
              <h3 className="onih3">PHASE FOUR</h3>
            </Col>
            <Col xs="12" sm="12" md="12" lg="9" xl="9" xxl="9">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1285.843"
                height="458.831"
                viewBox="0 0 1285.843 458.831"
                className="roadmapimage"
              >
                <g
                  strokeWidth="1"
                  data-name="Group 305"
                  transform="translate(0 -.154)"
                >
                  <path
                    d="M152.273 209.633L269.548 1.452h58.639l43.37 208.181z"
                    data-name="Path 120"
                  ></path>
                  <path
                    d="M171.98 193.047L273.781 11.304h47.328c.486 3.331 37.264 181.743 37.264 181.743z"
                    data-name="Path 121"
                  ></path>
                  <path
                    d="M191.69 176.462l86.326-155.3h36.015c.971 6.662 31.157 155.3 31.157 155.3z"
                    data-name="Path 122"
                  ></path>
                  <path
                    d="M211.398 159.878L282.25 31.014h24.7c1.457 9.992 25.051 128.864 25.051 128.864z"
                    data-name="Path 123"
                  ></path>
                  <path
                    d="M231.103 143.292l55.379-102.423h13.393c1.943 13.321 18.944 102.423 18.944 102.423z"
                    data-name="Path 124"
                  ></path>
                  <path
                    d="M250.812 126.706h54.82s-10.41-59.331-12.838-75.985h-2.082z"
                    data-name="Path 125"
                  ></path>
                  <path
                    d="M61.838 146.454l-11.133 62.982H.593L37.134.654h76.9c54.629 0 82.117 32.014 73.419 80.727-6.96 39.666-38.972 65.073-89.774 65.073zM79.585 45.193L69.493 101.91h29.576c21.225 0 34.1-6.612 37.231-25.053 3.481-19.833-5.217-31.665-27.837-31.665z"
                    data-name="Path 111"
                  ></path>
                  <path
                    d="M468.255 132.532h-28.536l-13.57 76.9h-50.108L412.925.654h88.037c53.586 0 77.244 27.837 69.59 73.072-5.217 30.968-23.314 48.019-50.8 54.978l41.061 80.031v.7h-58.8zm-13.224-87.339l-8 45.931h40.707c19.835 0 31.32-7.308 33.753-20.878 2.784-16.353-4.87-25.053-25.053-25.053z"
                    data-name="Path 112"
                  ></path>
                  <path
                    d="M635.619 131.14l-13.918 78.292h-50.108L608.131.654h50.453l-16.008 90.123h1.741L731.308.654h60.894l-.349.7-112.392 113.431 77.945 93.951v.7h-57.762z"
                    data-name="Path 113"
                  ></path>
                  <path
                    d="M92.807 376.715H64.274l-13.574 76.9H.6l36.88-208.782h88.035c53.586 0 77.249 27.837 69.592 73.072-5.22 30.969-23.314 48.02-50.8 54.978l41.059 80.031v.7h-58.8zm-13.223-87.339l-8 45.931h40.709c19.835 0 31.318-7.308 33.753-20.878 2.784-16.353-4.87-25.053-25.053-25.053z"
                    data-name="Path 114"
                  ></path>
                  <path
                    d="M233.728 244.832h157.278l-8.351 47.323H275.483l-6.263 35.143h98.821l-7.308 41.757h-98.821l-6.612 37.231h107.522l-8.351 47.323H196.844z"
                    data-name="Path 115"
                  ></path>
                  <path
                    d="M431.367 406.29h89.427l-8.351 47.323H372.909l36.537-208.781h50.108z"
                    data-name="Path 116"
                  ></path>
                  <path
                    d="M563.588 244.832h157.277l-8.351 47.323H605.343l-6.263 35.143h98.821l-7.306 41.761h-98.823l-6.612 37.231h107.521l-8.351 47.323H526.704z"
                    data-name="Path 117"
                  ></path>
                  <path
                    d="M905.627 386.107l50.455-9.4c.7 25.055 18.094 38.626 45.931 38.626 19.833 0 30.968-6.265 33.057-17.4 2.435-14.963-6.265-22.271-43.149-28.882-54.978-9.394-68.9-36.884-62.631-73.766 5.914-34.449 35.839-55.327 86.294-55.327 61.588 0 79.335 30.968 82.466 67.157l-51.5 10.092c-1.739-23.663-10.786-35.145-36.884-35.145-19.137 0-29.576 6.959-31.315 17.4-2.088 11.829 2.088 21.574 44.19 28.88 57.413 10.092 68.9 39.669 62.98 73.421-6.263 34.8-34.447 56.717-89.078 56.717-67.153.005-89.424-33.052-90.816-72.373z"
                    data-name="Path 118"
                  ></path>
                  <path
                    d="M1127.969 244.832h157.278l-8.351 47.323h-107.172l-6.263 35.143h98.821l-7.308 41.757h-98.82l-6.612 37.231h107.521l-8.349 47.327h-157.629z"
                    data-name="Path 119"
                  ></path>
                  <path
                    d="M691.553 453.316l117.272-208.181h58.639l43.37 208.181z"
                    data-name="Path 126"
                  ></path>
                  <path
                    d="M711.26 436.731l101.8-181.743h47.328c.486 3.331 37.264 181.743 37.264 181.743z"
                    data-name="Path 127"
                  ></path>
                  <path
                    d="M730.969 420.144l86.326-155.3h36.015c.971 6.662 31.157 155.3 31.157 155.3z"
                    data-name="Path 128"
                  ></path>
                  <path
                    d="M750.677 403.559l70.852-128.864h24.7c1.457 9.992 25.051 128.864 25.051 128.864z"
                    data-name="Path 129"
                  ></path>
                  <path
                    d="M770.384 386.974l55.377-102.423h13.393c1.943 13.321 18.944 102.423 18.944 102.423z"
                    data-name="Path 130"
                  ></path>
                  <path
                    d="M790.094 370.389h54.82s-10.409-59.33-12.838-75.985h-2.082z"
                    data-name="Path 131"
                  ></path>
                </g>
              </svg>
              <p>
                The highly anticipated Oni-nous Park will open it's gates and
                all hell will break loose shortly after. Come and discover the
                park through the eyes of your Oni. Proceed with caution.
              </p>
            </Col>
          </Row>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}

export default Roadmap;

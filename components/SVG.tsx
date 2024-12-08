interface MySvg6Props extends React.SVGProps<SVGSVGElement> {
    primaryColor?: string;
    secondaryColor?: string;
    tertiaryColor?: string;
    opacity?: number;
  }

export const MySvg = ({
    primaryColor = '#b3f4ff',
    secondaryColor = '#88d6ff',
    tertiaryColor = '#fff',
    opacity = 0.42,
    ...props
  }: MySvg6Props) => (
    <svg id="Layer_2" {...props}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 224.879 93.839">
      <g id="OBJECTS">
        <g>
          <path fill={primaryColor} d="M190.437,39.268c-.07,0-.139.002-.208.003-3.022-8.804-9.793-14.942-17.669-14.942-2.22,0-4.349.494-6.335,1.39-3.677-10.912-14.357-18.807-26.966-18.807-5.995,0-11.552,1.789-16.13,4.834-5.487-7.192-13.572-11.746-22.597-11.746-13.744,0-25.316,10.551-28.827,24.923-2.838-1.173-5.924-1.824-9.157-1.824-11.754,0-21.617,8.517-24.35,20.016-2.461-.401-5.043-.615-7.705-.615C13.652,42.5,0,51.031,0,61.556s13.652,19.056,30.493,19.056c3.938,0,7.697-.472,11.152-1.321,14.253,5.065,34.534,8.232,57.042,8.232,2.875,0,5.711-.053,8.506-.154,4.104,3.997,9.769,6.469,16.026,6.469,7.351,0,13.882-3.414,18.028-8.703,4.167,1.502,9.253,2.388,14.749,2.388,14.104,0,25.537-5.813,25.537-12.984,0-.202-.012-.403-.03-.603,2.85.391,5.843.603,8.934.603,19.021,0,34.441-7.896,34.441-17.636s-15.42-17.636-34.441-17.636Z" />
          
          <g opacity={opacity}>
            <path fill={tertiaryColor} d="M86.295,40.555s7.317-8.459,27.56-9.756c0,0-1.498-11.553,9.206-19.137-1.645-2.142-3.523-4.045-5.587-5.664,1.413,7.025-6.507,20.484-22.597,24.754-10.912,2.896-19.866-2.308-23.173-5.83-.116,3.793.396,10.787-6.251,10.787-17.91,0-23.912.539-27.256,7.404,0,0,10.802-6.402,48.097-2.559Z" />
          </g>
          
          <path fill={tertiaryColor} d="M220.645,65.378c-17.601,7.573-43.577-3.771-43.577-3.771,0,0,2.222,14.777-19.109,17.385-21.33,2.608-30.44-13.038-30.44-13.038-19.997,20.862-73.546,6.374-89.543,2.318-15.998-4.056-8.371-16.515-8.371-16.515C11.68,69.43.133,59.808.133,59.808H.133c-.084.576-.133,1.159-.133,1.748,0,10.525,13.652,19.056,30.493,19.056,3.938,0,7.697-.472,11.152-1.321,14.253,5.065,34.534,8.232,57.042,8.232,2.875,0,5.711-.053,8.506-.154,4.104,3.997,9.769,6.469,16.026,6.469,7.351,0,13.882-3.414,18.028-8.703,4.167,1.502,9.253,2.388,14.749,2.388,14.104,0,25.537-5.813,25.537-12.984,0-.202-.012-.403-.03-.603,2.85.391,5.843.603,8.934.603,13.023,0,24.354-3.702,30.208-9.162Z" />
          
          {/* Modify the following paths similarly */}
          <g>
            <path fill={secondaryColor} d="M27.358,57.55c.315-3.169,1.633-6.232,3.525-8.855,1.884-2.651,4.432-4.806,7.26-6.416,2.875-1.548,6.013-2.49,9.187-2.976,1.585-.247,3.196-.25,4.78-.357,1.595.088,3.182.184,4.752.35-1.581.211-3.145.338-4.699.482l-2.307.403c-.761.16-1.545.184-2.285.426-1.484.442-3.016.685-4.424,1.312-.707.292-1.463.469-2.138.828l-2.047,1.019c-2.658,1.481-5.055,3.407-7.036,5.738-1.977,2.335-3.567,5.043-4.569,8.045Z" />
            <path fill={secondaryColor} d="M31.755,75.225c7.189,2.331,14.437,4.358,21.732,6.14,3.654.864,7.31,1.707,10.994,2.397,3.679.711,7.366,1.376,11.077,1.857,7.408,1.049,14.878,1.599,22.35,1.51,3.733-.093,7.469-.303,11.185-.777,3.715-.479,7.398-1.212,11.066-2.144-3.487,1.469-7.143,2.544-10.856,3.378-3.726.774-7.512,1.263-11.313,1.53-3.803.273-7.617.224-11.422.094-3.804-.185-7.591-.579-11.362-1.068-7.527-1.083-14.966-2.699-22.234-4.864-7.264-2.161-14.414-4.739-21.219-8.053Z" />
            <path fill={secondaryColor} d="M129.742,75.225c2.25,2.699,4.948,4.826,7.839,6.534,2.907,1.687,6.043,2.899,9.296,3.68l2.461.522c.823.168,1.671.19,2.505.315,1.667.312,3.371.204,5.073.348.854.086,1.705-.049,2.563-.038l2.586-.046c1.719-.14,3.447-.306,5.221-.354-1.647.599-3.339,1.101-5.043,1.592-1.735.295-3.479.69-5.253.832-3.549.286-7.178.139-10.705-.695-.887-.171-1.733-.523-2.599-.778-.428-.147-.867-.26-1.285-.435l-1.242-.554-1.231-.573c-.404-.204-.786-.452-1.179-.676l-1.166-.692c-.384-.237-.731-.535-1.097-.799-2.886-2.142-5.385-4.908-6.743-8.184Z" />
            <path fill={secondaryColor} d="M83.97,42.773c3.615-4.208,8.284-7.544,13.434-9.786,5.151-2.255,10.86-3.325,16.512-3.025,2.82.183,5.622.627,8.341,1.373,2.691.819,5.362,1.738,7.846,3.042,5.036,2.465,9.587,5.777,13.637,9.554-4.471-3.269-9.198-6.149-14.197-8.352-4.99-2.21-10.309-3.645-15.715-3.922-5.403-.317-10.843.621-15.923,2.551-2.536.979-5.005,2.175-7.331,3.623-2.352,1.411-4.566,3.065-6.603,4.94Z" />
            <path fill={secondaryColor} d="M112.439,30.753c.033-2.917.695-5.82,1.738-8.573,1.05-2.755,2.556-5.37,4.522-7.624.999-1.109,2.081-2.152,3.274-3.056,1.214-.872,2.476-1.684,3.84-2.286,2.706-1.24,5.651-1.866,8.556-1.893-2.815.729-5.509,1.69-7.953,3.073-2.432,1.397-4.619,3.166-6.439,5.28-1.859,2.081-3.337,4.495-4.588,7.029-1.226,2.552-2.221,5.24-2.95,8.05Z" />
            <path fill={secondaryColor} d="M177.069,36.109c2.372-.957,5.086-1.016,7.634-.472,2.572.533,4.963,1.781,7.028,3.375,2.103,1.583,3.707,3.669,5.145,5.79.662,1.101,1.248,2.244,1.825,3.377.468,1.191.937,2.374,1.33,3.576-.737-1.046-1.397-2.113-2.059-3.17l-2.18-3.02c-.405-.466-.804-.934-1.19-1.411l-.584-.71c-.208-.223-.434-.43-.65-.645l-1.28-1.302-1.406-1.149c-1.892-1.496-4.013-2.689-6.316-3.433-2.304-.729-4.775-1.069-7.298-.805Z" />
          </g>
        </g>
      </g>
    </svg>
  );
  
  
  
 export const MySvg2 = ({
    primaryColor = '#b3f4ff',
    secondaryColor = '#88d6ff',
    tertiaryColor = '#fff',
    opacity = 0.42,
    ...props
  }: MySvg6Props) => (
    <svg id="Layer_2" {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 184.58 111.92">
      <g id="OBJECTS">
        <g>
          {/* Main shape with primary color */}
          <path
            fill={primaryColor}
            d="M165.63,53.64c-2.37,0-4.63.35-6.72.98-5.45-8.35-15.69-13.99-27.42-13.99-.04,0-.08,0-.12,0,.07-.83.12-1.66.12-2.5C131.48,17.08,109.13,0,81.54,0S31.6,17.08,31.6,38.14c0,.84.05,1.67.12,2.5-.04,0-.08,0-.12,0C14.15,40.63,0,53.08,0,68.44s14.15,27.8,31.6,27.8c.02,0,.04,0,.06,0,5.33,9.23,17.44,15.68,31.55,15.68s26.13-6.4,31.49-15.58c0,0,12.11,3.82,21.04-3.8,4.64,2.35,10.01,3.7,15.75,3.7,11.74,0,21.97-5.63,27.42-13.99,2.09.62,4.35.98,6.72.98,10.47,0,18.95-6.62,18.95-14.79s-8.48-14.79-18.95-14.79Z"
          />
          {/* Semi-transparent paths with secondary color */}
          <g style={{ opacity }}>
            <path
              fill={secondaryColor}
              d="M131.48,40.63s-.08,0-.12,0c.07-.83.12-1.66.12-2.5,0-13.36-9-25.11-22.62-31.92,9.77,5.61,15.82,13.96,12.29,26.42,0,0,12.92,6.82,14.22,16.39,0,0,2.59-4.97,7.84-6.41-3.63-1.28-7.58-2-11.73-2Z"
            />
            <path
              fill={secondaryColor}
              d="M22.84,52.4s1.56-5.94,7.71-11.74c-3.89.11-7.6.84-11.01,2.08,2.01,1.74,3.5,4.69,3.29,9.66Z"
            />
            <path
              fill={secondaryColor}
              d="M41.15,24.39c-.97-1.81-.04-5.79,1.61-10.26-6.97,6.56-11.15,14.91-11.15,24.02,0,.51.02,1.02.05,1.52,6.05-5.21,16.03-10.38,32.16-10.28-7.46-.38-20.65-1.21-22.67-5Z"
            />
          </g>
          {/* Additional shapes with secondary color */}
          <path
            fill={secondaryColor}
            d="M121.32,88.64c8.51-5.95,14.55-23.77,14.55-23.77,0,0-15.52,22.1-34.74,22.1s-26.28-8.36-26.28-8.36c-14.61,6.06-20.2-1.29-20.2-1.29,0,0-4.16,6.09-28.04,6.09S.27,72,.27,72H.27c1.99,13.67,15.26,24.24,31.34,24.24.02,0,.04,0,.06,0,5.33,9.23,17.44,15.68,31.55,15.68s26.13-6.4,31.49-15.58c0,0,12.11,3.82,21.04-3.8,4.64,2.35,10.01,3.7,15.75,3.7,11.74,0,21.97-5.63,27.42-13.99-16.7,17.74-37.59,6.39-37.59,6.39Z"
          />
          {/* Tertiary colored paths */}
          <path
            fill={tertiaryColor}
            d="M51.92,74.19c5.69,6.25,13.52,7.33,21.16,4.47,1.73-.51,3.46-1.36,5.18-1.96-7.92,7.14-21.03,8.15-26.33-2.5h0Z"
          />
          <path
            fill={tertiaryColor}
            d="M21.98,58.81c-.8-6.59,2.13-13.35,6.62-18.14,1.12-.99,2.24-2.22,3.47-3.05,0,0,2.52-1.76,2.52-1.76l2.7-1.45c5.4-2.76,11.48-4,17.48-4.46-5.25,1.48-10.43,3.02-15.34,5.42-.86.46-2.92,1.67-3.81,2.15-7.35,4.76-12.92,12.35-13.65,21.3h0Z"
          />
          <path
            fill={tertiaryColor}
            d="M77.73,89.82c16.49,9.02,33.12,9.58,46.79-4.63-11.14,16.59-32.14,16.52-46.79,4.63h0Z"
          />
          <path
            fill={tertiaryColor}
            d="M16.39,92.8c9.59,5.02,20.97,2.51,29.5-3.38,2.06-1.22,4.05-2.88,6.04-4.24-1.07,1.26-2.21,2.46-3.36,3.68-3.11,2.81-6.61,5.27-10.55,6.78-7.01,2.71-15.83,2.23-21.63-2.85h0Z"
          />
          <path
            fill={tertiaryColor}
            d="M118.37,31.37c8.82,2.07,17.34,9.69,17.55,19.2.06,3.32-.31.72-.77-.78-2.64-8.28-9.55-14.03-16.79-18.42h0Z"
          />
        </g>
      </g>
    </svg>
  );
  ;
export const MySvg3 = ({
    primaryColor = '#b3f4ff',
    secondaryColor = '#88d6ff',
    tertiaryColor = '#fff',
    opacity = 0.42,
    ...props
  }: MySvg6Props) => (
    <svg id="Layer_2" {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160.08 91.82">
      <g id="OBJECTS">
        <g>
          {/* Main path with primary color */}
          <path
            fill={primaryColor}
            d="M0,67.3c-.44-17.84,27.87-21.95,27.87-21.95,0,0-18.77-26.32,6.87-40.81s39.39,10.37,39.39,10.37c0,0,7.25-12.82,22.85-11.7s9.48,21.18,9.48,21.18c0,0,32.33-10.03,37.34,1.67,5.02,11.7-12.26,28.43-12.26,28.43,0,0,30.65,1.67,28.43,13.93-2.23,12.26-63.54,8.92-63.54,8.92,0,0-.56,14.49-23.41,14.49s-29.54-11.15-29.54-11.15c0-1.67-43.06,3.19-43.47-13.38Z"
          />
          {/* Semi-transparent paths with secondary color */}
          <path
            fill={secondaryColor}
            style={{ opacity }}
            d="M129.62,52.09c.77.11,1.53.27,2.29.44.12-.08.24-.16.36-.24-.46-.03-.72-.05-.72-.05,0,0,3.6-3.49,7.03-8.38-7.13,4.89-16.49,3.69-23.3-4.56,3.97,5.26,6.09,9.71,7.21,12.67,2.39-.26,4.74-.23,7.13.11Z"
          />
          <g style={{ opacity }}>
            <path
              fill={secondaryColor}
              d="M29.15,34.55c-4.82.07-6.93-5.69-7.84-10.64-.64,9.55,4.54,18.39,6.12,20.85,5.22-9.65,17.53-14.37,17.53-14.37,0,0-10.69,4.09-15.8,4.16Z"
            />
            <path
              fill={secondaryColor}
              d="M17.27,48.28c3.26,6.47,8.11,8.46,8.11,8.46-.69-4.24.07-7.95,1.63-11.15-1.65.3-5.46,1.1-9.74,2.69Z"
            />
          </g>
          {/* Additional shapes with secondary color */}
          <path
            fill={secondaryColor}
            style={{ opacity }}
            d="M56.14,19.85c5-2.36,16.82-6.59,29.49-1.68-4.16-2.71-8.04-6.75-3.84-11.04-5.17,3.42-7.65,7.8-7.65,7.8,0,0-6.47-11.7-18.82-14.37,6.8,3.36,16.48,10.5.83,19.29Z"
          />
          <path
            fill={secondaryColor}
            style={{ opacity }}
            d="M101.55,70.49s5.01-2.94,1.08-14.13c-2.06-5.87-7.48-8.62-10.69-8.62-6.06,0-23.11-4.39-10.58-12.75,4.27-2.85,12.72-1.62,12.72-1.62,0,0-8.24-5.28-16.09-1.62-10.68,4.97-8.34,11.68-8.34,11.68-35.03,1.31-28.9,28.13-28.9,28.13C7.77,80.41.24,67.47.02,66.35c0,.08,0,.16,0,.24l.04,1.16c1.65,15.69,43.43,11,43.43,12.64,0,0,6.69,11.15,29.54,11.15s23.41-14.49,23.41-14.49c0,0,61.31,3.34,63.54-8.92,0,0-9.94,12.52-58.42,2.36ZM96.5,71.16c-2.11,8.05-13.99,10.25-26.09,7.08-12.09-3.17-21.89-11.72-19.78-19.76,2.11-8.05,16.56-12.83,28.65-9.66,12.09,3.17,19.32,14.3,17.22,22.34Z"
          />
          {/* Tertiary colored paths */}
          <g>
            <path
              fill={tertiaryColor}
              d="M46.52,63.3c2.8-8.71,11.26-15.28,20.44-16.22,9.07-.94,19.22,1.33,25.28,8.58,4,4.75,5.84,10.98,5.62,16.94-.54-5.85-2.79-11.63-6.78-15.93-7.74-8.24-22.14-9.94-32.24-5.48-5.31,2.46-9.71,6.82-12.32,12.11h0Z"
            />
            <path
              fill={tertiaryColor}
              d="M25.7,59.85c-2.54-6.43-.39-14.18,4.22-19.17,4.59-5.16,11.06-8.04,17.64-9.58-1.48.81-2.97,1.53-4.46,2.26l-4.27,2.47c-8.5,5.37-14.47,13.52-13.13,24.03h0Z"
            />
            <path
              fill={tertiaryColor}
              d="M64.43,17.2c9.11-5.47,21.16-1.52,28.75,4.9-2.37-.92-4.64-1.96-7-2.82-6.91-2.49-14.47-4.03-21.75-2.08h0Z"
            />
            <path
              fill={tertiaryColor}
              d="M72.19,47.83c-1.08-10.27,9.01-16.42,18.34-14.57-1.56.4-3.24.6-4.76,1.08-6.81,1.51-12.02,6.37-13.58,13.5h0Z"
            />
            <path
              fill={tertiaryColor}
              d="M110.33,41.13c9.42,1.53,14.63,12.17,13.44,21.03-.47-1.57-.78-3.26-1.29-4.8-1.84-6.71-5.89-12.86-12.15-16.23h0Z"
            />
            <path
              fill={tertiaryColor}
              d="M122.84,55.84c10.31-1.75,21.38.12,30.54,5.16-10.11-2.41-20.2-4.14-30.54-5.16h0Z"
            />
          </g>
          {/* Final secondary color path */}
          <path
            fill={secondaryColor}
            style={{ opacity }}
            d="M123.74,20.73c-8.89,1.01-17.28,3.61-17.28,3.61,0,0,1.27-4.18,1.18-8.82-1.6,10.99-12.91,7.49-12.91,7.49,6.29,4.32,11.21,8.61,15.08,12.66-.31-.46-.62-.94-.94-1.46-5.6-9.08,14.17-13.32,14.87-13.47Z"
          />
        </g>
      </g>
    </svg>
  );

  export const MySvg4 = ({
    primaryColor = '#b3f4ff',
    secondaryColor = '#88d6ff',
    tertiaryColor = '#fff',
    opacity = 0.42,
    ...props
  }: MySvg6Props) => (
    <svg id="Layer_2" {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 261.21 101.04">
      <g id="OBJECTS">
        <g>
          {/* Main path with primary color */}
          <path
            fill={primaryColor}
            d="M19.35,70.75s-4.36-13.51,7.41-21.79c11.77-8.28,25.28,0,25.28,0,0,0-6.97-20.48,17.87-29.63s32.84,1.7,32.84,1.7c0,0,3.85-23.13,24.68-20.87,24.73,2.68,19.17,24.84,19.17,24.84,0,0,3.02-1.78,7.31-2.81,18.19-4.39,26.63,11.41,26.38,19.7-.16,5.25-1.87,7.95-1.87,7.95,0,0,35.36-10.46,38.82,9.15,0,0,43.98,5.23,43.98,12.2,0,9.73-101.99,15.26-101.99,15.26,0,0-6.56,14.58-45.35,14.58-36.61,0-44.85-12.85-44.85-12.85,0,0-64.65,8.39-68.57-1.19-3.92-9.59,18.9-16.24,18.9-16.24Z"
          />
          {/* Semi-transparent paths with secondary color */}
          <path
            fill={secondaryColor}
            style={{ opacity }}
            d="M93.04,26.36s1.65-6.55,4.81-8.78c0,0,4.16,1.87,4.89,3.45l-9.7,5.33Z"
          />
          <path
            fill={secondaryColor}
            style={{ opacity }}
            d="M51.39,39s3.31-1.18,10.26,1.96l-9.96,6.75s-.96-3.25-.3-8.71Z"
          />
          <path
            fill={secondaryColor}
            style={{ opacity }}
            d="M115.74,38.3s7.89-9.17,18.68-6.44c17.19,4.34,17.19,19.37,17.19,19.37,0,0-10.32-16.77-35.87-12.93Z"
          />
          <path
            fill={secondaryColor}
            style={{ opacity }}
            d="M184.89,48.33c-3.87.73-6.49,1.5-6.49,1.5l.27-.4c.54-.85,1.68-3.09,1.63-6.65-2.3,1.64-15.74-.17-21.68-5.31-4.74-4.1-8.55-11.83-5.75-15.02-3.72,1.1-6.29,2.53-6.29,2.53,0,0,.97-3.9.28-8.62,0,0-.41,4.32-5.3,4.86-2.99.34-24.13-.2-33.07-4.59-2.32-1.14-2.52-3.7-2.04-5.58-2.91,5.06-3.73,9.96-3.73,9.96,0,0,50.63-5.66,49.22,30.81,0,0,2.1-6.22,12.05-5.68,7.41.4,16.69,7.51,15.63,13.91,0,0,14.29-2.92,18.73,10.2,0,0,.05-11.54,18.85-11.27,0,0-3.71-1.64-13,1.4-6.14,2.01-10.29.66-14.69-1.74-3.38-1.84-5.6-5.06-6.61-6.96-1.14-2.14,1.97-3.35,1.97-3.35Z"
          />
          <path
            fill={secondaryColor}
            style={{ opacity }}
            d="M64.65,79.86s-12.42-14.32-4.8-27.25,27.92-8.18,27.92-8.18c0,0-25.09,8.18-23.12,35.43Z"
          />
          <path
            fill={secondaryColor}
            style={{ opacity }}
            d="M50.83,63.38s-3.31-8.07,1.2-14.42c0,0-3.23-1.97-7.9-3.03-1.88,2.65-3.64,7.28-1.62,14.46,0,0-14.39,2.99-23.17,10.36,0,0,12.71-5.74,31.48-7.37Z"
          />
          <path
            fill={secondaryColor}
            style={{ opacity }}
            d="M261.21,71.19c0-.24-.06-.48-.16-.71-3.83,9.69-62.68-.52-62.68-.52,0,0-2.71,8.75-19.94,8.75-23.12,0-25.06-21.25-25.06-21.25,0,0,.1,29.02-43.28,29.02-16.73,0-31.03-2.38-37.52-6.61-7.58-4.95-5.96-14.86-5.96-14.86,0,0-1.83,5.98-1.46,13.27,0,0-27.94,13.7-57.53,12.27h0c17.74,3.3,61.39-2.37,61.39-2.37,0,0,8.24,12.85,44.85,12.85,38.78,0,45.35-14.58,45.35-14.58,0,0,101.99-5.53,101.99-15.26Z"
          />
          {/* Tertiary colored paths */}
          <path
            fill={tertiaryColor}
            d="M88.66,44.47c-9.79,3.8-18.46,11.32-21.31,21.6-1.32,4.93-1.9,10.41-.52,15.38,1.4,5.15,5.39,9.02,9.38,12.39-4.56-2.87-8.98-6.63-10.75-11.95-2.49-7.92-.99-16.93,3.36-23.93,4.46-6.9,11.85-11.79,19.84-13.48h0Z"
          />
          <path
            fill={tertiaryColor}
            d="M50.83,63.38c-6.79-11.02.96-21.81,12.94-23.1-2.35,1.12-4.64,2.24-6.69,3.66-6.9,4.41-8.47,11.85-6.25,19.44h0Z"
          />
          <path
            fill={tertiaryColor}
            d="M115.74,38.3c14.5-4.47,33.19.54,37.63,16.53-7.38-14.45-22.61-17.8-37.63-16.53h0Z"
          />
          <path
            fill={tertiaryColor}
            d="M166.91,44.47c9.94-2.21,17.23,6.93,16.53,16.33-.58-1.49-.99-3.11-1.64-4.55-2.33-6.56-7.86-11.05-14.88-11.78h0Z"
          />
          <path
            fill={tertiaryColor}
            d="M170.9,60.8c8.04-2.47,21.52-3.07,26.42,5.22.65,1.24,1.01,2.6,1.06,3.94-3.72-10.34-18.48-8.97-27.48-9.16h0Z"
          />
          <path
            fill={tertiaryColor}
            d="M89.67,28.86c5.38-6.01,15.13-11.69,23.28-8.48-2.18-.08-4.21.2-6.21.68-5.87,1.49-11.73,4.96-17.07,7.8h0Z"
          />
          <path
            fill={tertiaryColor}
            d="M139.83,23.36c5.5-1.12,12.01,3.44,11.35,9.36-2.23-4.85-6.51-7.51-11.35-9.36h0Z"
          />
        </g>
      </g>
    </svg>
  );

  export const MySvg5 = ({
    primaryColor = '#b3f4ff',
    secondaryColor = '#88d6ff',
    tertiaryColor = '#fff',
    opacity = 0.42,
    ...props
  }: MySvg6Props) => (
    <svg id="Layer_2" {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 242.71 85.74">
      <g id="OBJECTS">
        <g>
          {/* Main path with primary color */}
          <path
            fill={primaryColor}
            d="M187.95,50.72c-4.1-11.55-24.36-20.33-48.76-20.33-3.45,0-6.81.18-10.06.51C123.95,13.05,107.49,0,87.97,0c-22.93,0-41.66,18.01-42.81,40.66-10.57,2.77-18.46,7.58-21.37,13.32-.41-.01-.82-.04-1.23-.04-12.45,0-22.55,6.22-22.55,13.88s10.1,13.88,22.55,13.88c7.59,0,14.28-2.31,18.37-5.85,7.08,2.4,15.72,3.81,25.05,3.81,6.43,3.85,13.96,6.07,22,6.07,10.08,0,19.35-3.49,26.67-9.32,7.24,2.06,15.62,3.24,24.55,3.24.73,0,1.46-.01,2.18-.03,10.71,3.28,25.81,5.33,42.56,5.33,32.46,0,58.78-7.68,58.78-17.15s-24.18-16.5-54.76-17.1Z"
          />
          {/* Semi-transparent paths with secondary color */}
          <path
            fill={secondaryColor}
            style={{ opacity }}
            d="M22.55,81.7c7.59,0,14.28-2.31,18.37-5.85,7.08,2.4,15.72,3.81,25.05,3.81,6.43,3.85,13.96,6.07,22,6.07,10.08,0,19.35-3.49,26.67-9.32,7.24,2.06,15.62,3.24,24.55,3.24.73,0,1.46-.01,2.18-.03,10.71,3.28,25.81,5.33,42.56,5.33,32.46,0,58.78-7.68,58.78-17.15,0-.87-.23-1.72-.65-2.56-2.04,6.1-10,9.7-43.45,13.1-39.73,4.04-46.42-13.67-46.42-13.67-31.06,14.32-38.57-7.06-38.57-7.06,0,0-6.83,14.93-23.89,15.96-17.07,1.03-20.82-8.9-20.82-8.9-16.04,12.27-26.88-3.14-26.88-3.14,0,0-1.79,8.28-19.54,11.35-17.75,3.07-22.48-5.08-22.48-5.08,0,7.67,10.1,13.88,22.55,13.88Z"
          />
          {/* Tertiary colored paths */}
          <path
            fill={tertiaryColor}
            d="M29.2,74.48c6.48,1.26,12.95.17,18.75-2.85,1.62-.88,3.21-1.88,4.83-2.8-4.97,7.26-15.91,10.63-23.57,5.65h0Z"
          />
          <path
            fill={tertiaryColor}
            d="M42.02,61.56c2.89,8.01,16.26,7.67,22.89,5.43,2.61-.98,5.08-2.69,6.39-5.43-.17,1.52-.96,2.94-1.96,4.14-5.79,7.13-26.3,6.93-27.32-4.14h0Z"
          />
          <path
            fill={tertiaryColor}
            d="M85.16,73.61c11.42-.53,25.35-4.41,27.9-17.18.35-1.67.45-3.39.49-5.16.45,1.7.64,3.49.58,5.3-.79,14.03-16.98,19.62-28.97,17.05h0Z"
          />
          <path
            fill={tertiaryColor}
            d="M113.75,59.35c7.37,10.04,19.27,10.4,30.4,7.87,1.58-.4,3.16-.81,4.8-1.13-1.46.78-2.97,1.47-4.48,2.16-5.1,1.94-10.64,3.05-16.13,2.15-6.22-1-12.39-5.02-14.59-11.05h0Z"
          />
          <path
            fill={tertiaryColor}
            d="M115.05,25.42c10.19-.29,20.04,6.35,24.42,15.41.63,1.29,1.09,2.67,1.54,4.01-.9-1.14-1.6-2.35-2.47-3.45-5.73-7.88-14.08-13.44-23.5-15.97h0Z"
          />
          <path
            fill={tertiaryColor}
            d="M56.66,32.68c-5.19,3.56-9.63,7.97-13.1,13.2-1.23,1.74-2.21,3.58-3.37,5.39,1.23-8.57,7.89-16.67,16.47-18.59h0Z"
          />
          <path
            fill={tertiaryColor}
            d="M176.1,44.84c7.59-.3,15.75,4.55,17.69,12.17.68,3.83.02,1.49-1.21-.31-3.73-6.05-9.9-9.26-16.48-11.86h0Z"
          />
        </g>
      </g>
    </svg>
  );
  
  export const MySvg6 = ({
    primaryColor = '#b3f4ff',
    secondaryColor = '#88d6ff',
    tertiaryColor = '#fff',
    opacity = 0.42,
    ...props
  }: MySvg6Props) => (
    <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 221.96 71.47">
      <g id="OBJECTS">
        <g>
          <path
            fill={primaryColor}
            d="M99.86,23.07S100.56,0,125.72,0s28.23,25.51,28.23,25.51c16.54-9.5,34.3,7.46,37.35,20.28,29.17-1.47,30.66,15.97,30.66,15.97,0,.99-14.68,2.19-36.49,3.24,0,0-16.33,3.3-25.18,3.61-4.68.16-23.1-.65-28.74-3.16,0,0-4.2,1.51-5.62,1.54,0,0-6.85,3.45-29.48,3.45s-30.4-2.92-30.4-2.92C29.01,67.27,0,65.68,0,61.75,0,54.87,69.45,49.98,69.45,49.98c0,0-9.44-26.21,30.41-26.91Z"
          />
          <g>
            <path
              fill={secondaryColor}
              style={{ opacity }}
              d="M148.15,22.33c6.32,2.76,9.34,7.33,9.34,7.33,1.27-3.49,3.08-5.66,5.18-6.86-2.89.21-5.82,1.04-8.72,2.71,0,0-.39-2.89-1.85-6.72-.7,3.57-3.96,3.54-3.96,3.54Z"
            />
            <path
              fill={secondaryColor}
              style={{ opacity }}
              d="M186.82,44.33c4.91,1.13,6.81,4.07,6.81,4.07,3.9-1.21,7.27-1.78,10.21-1.91-3.47-.66-7.6-.96-12.53-.71-.53-2.22-1.51-4.57-2.83-6.88,1.32,5.61-1.65,5.42-1.65,5.42Z"
            />
            <path
              fill={secondaryColor}
              d="M5.24,58.46c.44-.13.88-.26,1.35-.4-.47.13-.92.27-1.35.4Z"
            />
            <path
              fill={secondaryColor}
              style={{ opacity }}
              d="M66.36,55.29c1.47-6.06,7.99-8.1,7.99-8.1-3.12-.57-4.85-2.81-5.77-5.64-.47,4.69.87,8.44.87,8.44,0,0-1.74.12-4.66.36,1.15,2.56,1.57,4.95,1.57,4.95Z"
            />
            <path
              fill={secondaryColor}
              style={{ opacity }}
              d="M221.15,58.73c-.83,2.3-29.13,3.91-29.13,3.91-29.77,5.08-65.35,1.1-65.35,1.1,0,0-2.04,1.71-22.08,1.71s-24.11-3.72-24.11-3.72c-43.11,5.39-70.9.76-79.79-1.16-.44.39-.69.78-.69,1.18,0,3.93,29.01,5.52,66.06,5.77,0,0,7.77,2.92,30.4,2.92s29.48-3.45,29.48-3.45c1.43-.03,5.62-1.54,5.62-1.54,5.64,2.51,24.05,3.32,28.74,3.16,8.85-.31,25.18-3.61,25.18-3.61,21.81-1.05,36.49-2.25,36.49-3.24,0,0-.11-1.24-.82-3.03Z"
            />
          </g>
          {/* Tertiary colored paths */}
          <path
            fill={tertiaryColor}
            d="M69.45,49.98c-4.88-14.02,4.42-24.67,18.23-26.61,4.05-.65,8.15-.71,12.18-.31-5.04.53-9.94,1.18-14.74,2.6-11.72,3.4-17.58,12.09-15.67,24.31h0Z"
          />
          <path
            fill={tertiaryColor}
            d="M66.06,57.58c-1.36-6.72,5.7-11.74,11.79-11.9,3.01-.02,3.11.02.2.96-5.37,1.81-10.65,5.01-11.99,10.94h0Z"
          />
        </g>
        <path
          fill={tertiaryColor}
          d="M141.52,21.63c8.67-2.68,17.2,4.97,18.78,13.23-.93-1.21-1.74-2.59-2.69-3.76-3.81-5.27-9.3-9.04-16.09-9.47h0Z"
        />
        <path
          fill={tertiaryColor}
          d="M185.48,44.39c3.67-1.2,7.77,1.29,8.89,4.88.16.5.27,1.01.36,1.52-.3-.43-.53-.89-.8-1.31-1.78-3.01-4.92-4.92-8.45-5.09h0Z"
        />
        <path
          fill={tertiaryColor}
          d="M13.73,65.53c11.57.76,23.3,1.15,34.9.7,11.59-.47,23.19-1.78,34.27-5.48-19.87,9.61-47.83,8.83-69.17,4.78h0Z"
        />
        <path
          fill={tertiaryColor}
          d="M59.41,66.44c23.86,4.35,48.41,3.96,72.15-.99-22.39,7.64-49.54,8.05-72.15.99h0Z"
        />
        <path
          fill={tertiaryColor}
          d="M124.87,62.89c17.45,6.91,43.28,5.59,61.4,1.26,1.99-.48,4.49-1.2,6.38-1.98,0,0,2.08-.84,2.08-.84-17.14,10-52.51,11.67-69.86,1.57h0Z"
        />
      </g>
    </svg>
  );
  
  export const MySvg7 = (props:React.SVGProps<SVGSVGElement>) => (
    <svg id="Layer_2" {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 251 389.5">
      <g id="Layer_1-2" data-name="Layer_1">
        <path
          d="M223,389.5h-9c-.22-.12-.42-.31-.65-.34-11.5-1.44-21.65-6.28-31.21-12.53-15.44-10.09-28.13-23.13-39.5-37.5-13.99-17.68-29.19-34.19-46.46-48.73-20.07-16.89-41.93-30.82-66.58-40.12-9.6-3.62-19.47-6.21-29.6-7.79V0c1.16.05,2.32,0,3.46.16,31.37,4.53,62.08,11.83,92,22.34,28.56,10.04,55.77,22.75,80.09,41.05,21.97,16.53,39.13,37.03,50.52,62.13,4.95,10.91,7.82,22.3,5.92,34.44-2.56,16.41-17.37,27.36-33.75,25.12-8.12-1.11-15.12-4.44-21.07-10-7.91-7.4-15.52-15.12-23.66-22.26-9.25-8.12-18.74-16-28.49-23.51-6.21-4.78-13.34-8.13-21.15-9.77-12.88-2.7-23.09,4.05-25.52,16.98-1.05,5.56-.66,11.12.43,16.63,2.65,13.45,8.68,25.46,16.05,36.84,14.27,22.04,32.65,40.32,52.56,57.2,16.93,14.36,35.32,26.71,53.65,39.15,11.17,7.58,22.24,15.3,31.78,24.96,7.66,7.76,13.81,16.47,16.38,27.26.88,3.69,1.21,7.51,1.79,11.27v4c-.51,3.43-.78,6.92-1.57,10.28-2.8,11.81-9.3,20.44-21.41,23.97-1.65.48-3.34.83-5.02,1.25Z"
          fill={"white"}
        />
      </g>
    </svg>
  );

  export const SparkleSVG = ({ width = '800px', height = '800px', fill = '#000000' }) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={fill}
        d="M237.4 20.73c-6.1 42.1-26.8 64.2-63.9 64 31.6 4.5 63.8 8 63.9 64.07-.6-46.1 24.5-63.07 64.1-64.07-38-1.5-64.9-16.3-64.1-64zm127.8 11.58c-9.1 14.25-20.8 21.29-38.9 10.28 14.9 11.79 18.6 24.76 10.2 38.97 8.9-11.18 17.5-22.73 39-10.27-17.8-10.06-18.8-23.57-10.3-38.98zM59.68 41.69c-2.7 18.8-12 28.6-28.5 28.5 14.1 2 28.4 3.6 28.5 28.52-.3-20.5 10.9-28.12 28.5-28.52-16.9-.7-28.9-7.3-28.5-28.5zM431 66.28c-2.7 18.8-12 28.6-28.5 28.5 14.1 2 28.4 3.6 28.5 28.52-.3-20.5 10.9-28.12 28.5-28.52-16.9-.7-28.9-7.3-28.5-28.5zM120.3 116.4c-15.8 53.7-47.76 48-79.35 43.4C76.6 170 90.3 197.1 84.28 239.2c12.66-46 42.62-52.6 79.42-43.4-37.6-12.1-56.9-35.4-43.4-79.4zm187 5c-8.8 61.6-39.3 94-93.6 93.7 46.2 6.5 93.6 11.7 93.6 93.7-.8-67.3 35.9-92.2 93.8-93.7-55.5-2.2-94.9-23.9-93.8-93.7zm136.8 38.3c-13.1 21.6-29.5 28.8-49.7 20.1 16.3 9.7 33 19.1 20.1 49.6 10.3-25.2 27.9-28.7 49.7-20-20.3-9.7-31.6-23.9-20.1-49.7zM50.7 243.2c9.16 16.7 7.63 30.1-5.61 40 12.46-6.9 24.85-14.3 39.91 5.6-12.57-16.2-8.2-29 5.61-40-13.92 9.7-27.47 11.6-39.91-5.6zm137.2.3c11.4 26.8-.5 41.3-21.7 50.9 22.7-8.5 40.8-4.5 50.9 21.7-12.7-31.8 4.8-41.2 21.7-50.9-21 8.5-37.8.9-50.9-21.7zm228 12.6c-26.6 64.7-68.7 91.7-127.8 76.4 48.6 19.8 98.8 38.5 76.4 127.9 17.5-73.7 64.4-90.7 127.9-76.5-59.9-17.5-96.9-52-76.5-127.8zM99.94 295.5c15.66 57.8.86 98.1-47.32 118.5 43.46-11.8 87.38-25.2 118.68 47.4-26.4-59.3-3.4-95.4 47.3-118.8-50 19.2-93.1 15-118.66-47.1zm169.36 61c-21.8 20.6-43 23.6-63.2 7.3 15.5 16.3 31.6 32.4 7.2 63.3 19.8-25.6 41.2-24.1 63.3-7.3-20.2-17.4-28.6-37.5-7.3-63.3zM443.2 404c-2.7 18.8-12 28.6-28.5 28.5 14.1 2 28.4 3.6 28.5 28.5-.3-20.5 10.9-28.1 28.5-28.5-16.9-.7-28.9-7.3-28.5-28.5zm-169.7 36c-2.7 18.8-12 28.6-28.5 28.5 14.1 2 28.4 3.6 28.5 28.5-.3-20.5 10.9-28.1 28.5-28.5-16.9-.7-28.9-7.3-28.5-28.5z"
      />
    </svg>
  );
FROM 'node:12.18.3'

ADD . .

RUN npm install
RUN npm run build

ENTRYPOINT ["npm", "run", "start"]

FROM 'node:12.18.3'

ADD . .


RUN npm install

ENTRYPOINT ["npm", "run", "start"]
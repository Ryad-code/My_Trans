FROM    node:16.13.2

RUN	mkdir -p app/project
RUN	apt-get update && apt-get install vim -y

WORKDIR /app/project
EXPOSE  3000
COPY    ./scripts/runNestCreateDB.sh /
RUN     chmod 777 /runNestCreateDB.sh

ENTRYPOINT  ["../../runNestCreateDB.sh"]

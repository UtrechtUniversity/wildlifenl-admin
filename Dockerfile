FROM instrumentisto/flutter:3.29.0-androidsdk34-r0

WORKDIR /app

# Set a writable HOME directory
ENV HOME=/app
RUN mkdir -p $HOME/.config/flutter && chmod -R g+w $HOME/.config

# Ensure Flutter directory is writable
RUN chmod -R g+rwX /usr/local/flutter/bin/cache

# Alternative: Redirect cache to a writable location
ENV FLUTTER_HOME=/usr/local/flutter
ENV FLUTTER_CACHE=/tmp/flutter_cache
RUN mkdir -p $FLUTTER_CACHE && chmod -R 777 $FLUTTER_CACHE
ENV PUB_CACHE=$FLUTTER_CACHE

RUN git config --system --add safe.directory /usr/local/flutter

COPY . .

RUN flutter pub get

EXPOSE 8080

CMD ["flutter", "run", "-d", "web-server", "--web-port", "8080", "--web-hostname", "0.0.0.0"]

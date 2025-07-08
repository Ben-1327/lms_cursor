# LMS Cursor - Learning Management System

企業向けAI/プログラミング研修のLMS（Learning Management System）

## 技術スタック

- **フロントエンド**: Next.js + TailwindCSS
- **バックエンド**: NestJS (TypeScript)
- **データベース**: PostgreSQL
- **認証**: JWT + Passport
- **コンテナ**: Docker & Docker Compose

## 主要機能

- 認証・権限管理（システム管理者、コース管理者、講師、受講者）
- コース管理
- カリキュラム管理
- 受講者管理
- 学習進捗管理
- 通知/リマインド機能
- 外部システム連携（Salesforce、Slack、Google サービス）

## 開発環境のセットアップ

### 前提条件

- Node.js (18以上)
- Docker & Docker Compose
- Git

### 🚀 クイックスタート（Docker推奨）

1. **リポジトリのクローン**
```bash
git clone https://github.com/Ben-1327/lms_cursor.git
cd lms_cursor
```

2. **環境変数の設定**
```bash
# ルート用環境変数をコピー
cp .env.example .env

# フロントエンド用環境変数をコピー
cp frontend/.env.example frontend/.env.local

# バックエンド用環境変数をコピー
cp backend/.env.example backend/.env
```

3. **Dockerコンテナの起動**
```bash
# 全サービス起動（推奨）
npm run docker:up

# または直接Docker Composeを使用
docker-compose up -d
```

4. **データベースの準備**
```bash
# データベースが起動するまで少し待ってから
npm run docker:logs

# データベースのマイグレーション（初回のみ）
docker-compose exec backend npm run migration:run
```

### 💻 ローカル開発環境での起動

1. **依存関係のインストール**
```bash
# ルートの依存関係をインストール
npm install

# 各プロジェクトの依存関係をインストール
npm run install:all
```

2. **PostgreSQLの起動**
```bash
# PostgreSQLのみ起動
docker-compose up postgres -d
```

3. **開発サーバーの起動**
```bash
# フロントエンドとバックエンドを同時起動
npm run dev

# または個別に起動
npm run dev:frontend  # フロントエンドのみ
npm run dev:backend   # バックエンドのみ
```

### アクセスURL

- **フロントエンド**: http://localhost:3000
- **バックエンドAPI**: http://localhost:3001/api
- **Swagger API文書**: http://localhost:3001/api/docs
- **PostgreSQL**: localhost:5432

## 📋 利用可能なスクリプト

```bash
# 開発
npm run dev              # フロントエンド + バックエンド同時起動
npm run dev:frontend     # フロントエンドのみ
npm run dev:backend      # バックエンドのみ

# ビルド
npm run build            # 全体ビルド
npm run build:frontend   # フロントエンドビルド
npm run build:backend    # バックエンドビルド

# Docker関連
npm run docker:up        # Docker Compose起動
npm run docker:down      # Docker Compose停止
npm run docker:build     # Docker イメージビルド
npm run docker:logs      # ログ表示

# テスト・リンター
npm run test             # 全体テスト
npm run lint             # 全体リント
```

## 🔧 トラブルシューティング

### 1. `package.json`エラー
```bash
# エラー: Could not read package.json
# 解決策: ルートディレクトリでnpmコマンドを実行
cd /path/to/lms_cursor
npm install
```

### 2. Docker関連エラー
```bash
# コンテナのリセット
docker-compose down
docker-compose up --build

# ボリュームも含めて完全リセット
docker-compose down -v
docker-compose up --build
```

### 3. ポート競合エラー
```bash
# 使用中のポートを確認
lsof -i :3000
lsof -i :3001
lsof -i :5432

# プロセスを終了
kill -9 <PID>
```

### 4. データベース接続エラー
```bash
# PostgreSQLコンテナの状態確認
docker-compose ps postgres

# データベースの直接接続テスト
docker-compose exec postgres psql -U lms_user -d lms_db
```

## プロジェクト構成

```
lms_cursor/
├── frontend/          # Next.js フロントエンド
│   ├── app/           # App Router
│   ├── components/    # Reactコンポーネント
│   └── public/        # 静的ファイル
├── backend/           # NestJS バックエンド
│   ├── src/
│   │   ├── modules/   # 機能モジュール
│   │   ├── database/  # データベース関連
│   │   └── common/    # 共通機能
│   └── test/          # テストファイル
├── docs/              # 設計ドキュメント
├── docker-compose.yml # Docker構成
├── package.json       # ワークスペース管理
└── README.md          # このファイル
```

## API仕様

### 認証
- `POST /api/auth/login` - ログイン
- `POST /api/auth/logout` - ログアウト
- `GET /api/auth/me` - 現在のユーザー情報

### ユーザー管理
- `GET /api/users` - ユーザー一覧
- `POST /api/users` - ユーザー作成
- `GET /api/users/:id` - ユーザー詳細
- `PUT /api/users/:id` - ユーザー更新
- `DELETE /api/users/:id` - ユーザー削除

詳細なAPI仕様は Swagger UI（http://localhost:3001/api/docs）をご確認ください。

## 環境変数

### 必須設定
- `DATABASE_URL`: PostgreSQL接続URL
- `JWT_SECRET`: JWT署名用秘密鍵
- `NEXTAUTH_SECRET`: NextAuth.js用秘密鍵

### オプション設定
- 外部API連携（Salesforce、Google、Slack）
- メール送信設定
- ファイルストレージ設定

## 貢献

1. フィーチャーブランチを作成
2. 変更をコミット
3. プルリクエストを作成

## ライセンス

MIT License 